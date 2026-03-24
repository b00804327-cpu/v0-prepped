document.addEventListener("DOMContentLoaded", () => {
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // --- Modal Logic ---
    const scanModal = document.getElementById("scan-modal");
    const openScanBtn = document.getElementById("start-scan-hero-btn");
    const closeModalBtn = document.getElementById("close-modal");
    
    if (openScanBtn) {
        openScanBtn.addEventListener("click", () => {
            scanModal.classList.add("active");
        });
    }
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            scanModal.classList.remove("active");
        });
    }

    // --- API Integration: Scanning ---
    const runScanBtn = document.getElementById("run-scan-btn");
    
    runScanBtn.addEventListener("click", async () => {
        const resumeText = document.getElementById("resume-input").value;
        const jobDescriptionText = document.getElementById("jd-input").value;

        if (!resumeText || !jobDescriptionText) {
            alert("Please paste both your resume and the job description.");
            return;
        }

        // State UI update: Analyzing
        runScanBtn.innerHTML = `Scanning...`;
        runScanBtn.style.opacity = "0.7";
        document.getElementById("hero-status").innerText = "Analyzing...";
        document.getElementById("hero-status").style.color = "#f59e0b";
        document.getElementById("hero-status").style.backgroundColor = "rgba(245, 158, 11, 0.1)";

        try {
            const response = await fetch('/api/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ resumeText, jobDescriptionText })
            });
            const data = await response.json();

            if (data.success) {
                // Hide modal and scroll to dashboard
                scanModal.classList.remove("active");
                document.getElementById('demo').scrollIntoView({ behavior: 'smooth' });
                
                // Show dashboard, hide empty state
                document.getElementById('dashboard-window').style.display = 'block';
                document.getElementById('demo-empty-state').style.display = 'none';

                // Update Hero Metric Card
                document.getElementById("hero-score-ring").style.strokeDasharray = `${data.resumeScore}, 100`;
                // Animate number
                let currentScore = 0;
                const scoreInterval = setInterval(() => {
                    if (currentScore >= data.resumeScore) {
                        clearInterval(scoreInterval);
                    } else {
                        currentScore++;
                        document.getElementById("hero-score-num").innerText = currentScore;
                    }
                }, 15);
                
                document.getElementById("hero-status").innerText = "Completed";
                document.getElementById("hero-status").style.color = "#22c55e";
                document.getElementById("hero-status").style.backgroundColor = "rgba(34, 197, 94, 0.1)";

                const metricMatch = document.getElementById("val-match");
                metricMatch.innerText = `${data.metrics.keywordMatch}%`;
                metricMatch.className = `metric-value ${data.metrics.keywordMatch > 70 ? 'success' : 'warning'}`;
                
                const metricGap = document.getElementById("val-gap");
                metricGap.innerText = `${data.metrics.skillsGap} missing`;
                metricGap.className = `metric-value ${data.metrics.skillsGap > 5 ? 'warning' : 'success'}`;
                
                const metricAts = document.getElementById("val-ats");
                metricAts.innerText = data.metrics.atsCompatibility;
                metricAts.className = `metric-value ${data.metrics.atsCompatibility === 'Excellent' ? 'success' : 'warning'}`;
                
                const metricBullets = document.getElementById("val-bullets");
                metricBullets.innerText = `${data.metrics.bulletsToImprove} to improve`;
                metricBullets.className = `metric-value ${data.metrics.bulletsToImprove > 0 ? 'warning' : 'success'}`;

                // Populating missing skills
                const keywordsContainer = document.getElementById("missing-keywords-container");
                keywordsContainer.innerHTML = '';
                if(data.missingKeywords.length === 0) {
                    keywordsContainer.innerHTML = '<span class="skill-tag success">All core keywords matched!</span>';
                } else {
                    data.missingKeywords.forEach(kw => {
                        keywordsContainer.innerHTML += `<span class="skill-tag missing">${kw}</span>`;
                    });
                }

                // Populating full bullet point list in resume view
                const bulletsContainer = document.getElementById("demo-bullets");
                bulletsContainer.innerHTML = '';
                
                // We show the "bad" bullets among some fake "good" ones for the prototype illusion
                data.suggestions.forEach((sug, i) => {
                    bulletsContainer.innerHTML += `
                        <li class="bullet warning" id="${sug.id}">
                            <div class="bullet-icon">⚠️</div>
                            <span class="bullet-text">${sug.originalText}</span>
                        </li>
                    `;
                });
                if(data.suggestions.length === 0) {
                    bulletsContainer.innerHTML = `<li class="bullet success"><div class="bullet-icon">✅</div><span class="bullet-text">Your bullet points are strong and action-oriented!</span></li>`;
                }

                // Populate AI Suggestions Panel
                const suggestionsContainer = document.getElementById("suggestions-container");
                suggestionsContainer.innerHTML = '';
                
                data.suggestions.forEach((sug) => {
                    suggestionsContainer.innerHTML += `
                        <div class="suggestion-card" id="card-${sug.id}">
                            <div class="suggestion-tag">High Impact</div>
                            <p class="suggestion-desc">"${sug.originalText.substring(0, 40)}..." ${sug.issue}. Try tracking metrics and impact.</p>
                            <button class="btn btn-primary btn-sm autofix-btn" data-target="${sug.id}" data-text="${sug.originalText}">
                                ✨ Auto-fix
                            </button>
                        </div>
                    `;
                });

                attachAutofixListeners();

            }
        } catch (e) {
            console.error("API error", e);
            alert("Error running the analysis server. Make sure it is running.");
        } finally {
            runScanBtn.innerHTML = `Analyze My Resume <span class="arrow">→</span>`;
            runScanBtn.style.opacity = "1";
        }
    });

    // --- API Integration: Auto-fix ---
    function attachAutofixListeners() {
        document.querySelectorAll(".autofix-btn").forEach(btn => {
            btn.addEventListener("click", async (e) => {
                const targetId = e.target.getAttribute("data-target");
                const originalText = e.target.getAttribute("data-text");
                const card = document.getElementById(`card-${targetId}`);
                const warningBullet = document.getElementById(targetId);

                // UI loading
                e.target.innerHTML = `✨ Fixing...`;
                e.target.style.opacity = "0.7";
                e.target.style.pointerEvents = "none";

                try {
                    const res = await fetch('/api/autofix', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ bulletText: originalText })
                    });
                    const fixData = await res.json();

                    if(fixData.success) {
                        // Apply fixed text to DOM with typing animation
                        warningBullet.className = "bullet success";
                        const icon = warningBullet.querySelector(".bullet-icon");
                        const text = warningBullet.querySelector(".bullet-text");
                        
                        icon.innerHTML = "✅";
                        
                        // Hide suggestion card
                        card.style.transition = "opacity 0.5s ease";
                        card.style.opacity = "0";
                        setTimeout(() => card.style.display = "none", 500);

                        // Animate text
                        let charIndex = 0;
                        text.innerHTML = "";
                        const typeInterval = setInterval(() => {
                            if (charIndex < fixData.fixedText.length) {
                                text.innerHTML += fixData.fixedText.charAt(charIndex);
                                charIndex++;
                            } else {
                                clearInterval(typeInterval);
                                text.style.transition = "color 0.3s ease";
                                text.style.color = "#22c55e";
                                setTimeout(() => text.style.color = "", 400);
                            }
                        }, 15);
                    }
                } catch (err) {
                    console.error("Fix error", err);
                    e.target.innerHTML = `✨ Auto-fix Failed`;
                }
            });
        });
    }

});
