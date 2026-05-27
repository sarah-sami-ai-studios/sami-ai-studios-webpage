// ==========================================================================
// SAMI-AI-Studios JavaScript Controller
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // --- Video Catalog Data (21 Videos) ---
    const videoData = [
        {
            id: 'dondra-ep7',
            title: 'Whatever Became of Dondra - Episode 7 Intersections',
            duration: '8:07',
            views: '1,000',
            uploaded: '3 weeks ago',
            category: 'narrative',
            badgeText: 'Episode 7',
            youtubeId: 'mLx2XPVH37w',
            thumbnail: 'assets/mLx2XPVH37w.jpg',
            description: 'The final critical turning point in the Dondra series. As timelines intersect, the truth of the disappearance begins to surface. Our longest and most complex AI narrative integration to date, focusing on multi-character dramatic continuity.'
        },
        {
            id: 'chancey-ep1',
            title: 'Chancey and Chuck Help the Team (Chancey and Chuck Episode 1)',
            duration: '7:32',
            views: '43',
            uploaded: '2 weeks ago',
            category: 'comedy',
            badgeText: 'Episode 1',
            youtubeId: 'fLrdvwizaIE',
            thumbnail: 'assets/fLrdvwizaIE.jpg',
            description: 'Meet Chancey and Chuck in their first full-length episode. The dynamic duo tries to save the team from a creative disaster, leading to unexpected AI-generated cartoon hilarity and voice sync experiments.'
        },
        {
            id: 'chancey-promo',
            title: 'Chancey and Chuck Cartoon Series (Chancey and Chuck)',
            duration: '0:55',
            views: '26',
            uploaded: '3 weeks ago',
            category: 'comedy',
            badgeText: 'Teaser',
            youtubeId: 'TloY_66hsSo',
            thumbnail: 'assets/TloY_66hsSo.jpg',
            description: 'A quick promotional teaser showcasing the animation aesthetic and voice design for the new Chancey and Chuck series.'
        },
        {
            id: 'dfwin-promo',
            title: 'DFWin Product Promotional Video',
            duration: '2:01',
            views: '20',
            uploaded: '2 months ago',
            category: 'reviews',
            badgeText: 'Promo',
            youtubeId: 'GK9VhfH59eY',
            thumbnail: 'assets/GK9VhfH59eY.jpg',
            description: 'A mock commercial produced for DFWin, testing commercial narrative style, voiceover pacing, and clean branding integration inside AI-rendered office settings.'
        },
        {
            id: 'dondra-ep6',
            title: 'Whatever Became Of Dondra | Episode 6 - Confused Allegiances',
            duration: '7:17',
            views: '163',
            uploaded: '3 months ago',
            category: 'narrative',
            badgeText: 'Episode 6',
            youtubeId: 'bWRNwbKc1Lw',
            thumbnail: 'assets/bWRNwbKc1Lw.jpg',
            description: 'Loyalties are tested and dark secrets are whispered in the shadows. Episode 6 deepens the psychological tension as Dondra finds herself surrounded by questionable figures in this AI-generated drama.'
        },
        {
            id: 'fathers-confession',
            title: "My $47,000 Mistake - A Father's Confession to his Adult Children",
            duration: '1:37',
            views: '40',
            uploaded: '3 months ago',
            category: 'narrative',
            badgeText: 'Short Film',
            youtubeId: '9zfhniCFOZI',
            thumbnail: 'assets/9zfhniCFOZI.jpg',
            description: 'A poignant and emotional monologue of a father admitting to a massive financial mistake. This short film focuses on realistic human emotion modeling and dramatic voice synthesis.'
        },
        {
            id: 'provido-spam',
            title: 'Provido Telephone Spam Terminator',
            duration: '0:56',
            views: '16',
            uploaded: '3 months ago',
            category: 'reviews',
            badgeText: 'Review/Demo',
            youtubeId: 'XYMbhSvFm6c',
            thumbnail: 'assets/XYMbhSvFm6c.jpg',
            description: 'An AI-assisted demonstration video showcasing the features and interface of the Provido Spam Terminator app.'
        },
        {
            id: 'dondra-ep5',
            title: 'Whatever Became of Dondra - Episode 5: Becoming Dondra | A Weekend In Provincetown, 1976',
            duration: '6:43',
            views: '981',
            uploaded: '3 months ago',
            category: 'narrative',
            badgeText: 'Episode 5',
            youtubeId: 'vLqxyJ8py0Y',
            thumbnail: 'assets/vLqxyJ8py0Y.jpg',
            description: 'Flashback episode. Take a trip back to Provincetown, 1976, to witness the origin events of Dondra. The episode blends nostalgic 1970s film grains with AI video consistency modeling.'
        },
        {
            id: 'dondra-ep4',
            title: 'Episode 4 - Playing with Fire',
            duration: '3:57',
            views: '206',
            uploaded: '4 months ago',
            category: 'narrative',
            badgeText: 'Episode 4',
            youtubeId: 'rdxHJBJMNpc',
            thumbnail: 'assets/rdxHJBJMNpc.jpg',
            description: 'Dondra makes a high-stakes decision that sets off a chain reaction. Tension mounts in this fast-paced episode that pushes action sequences and dynamic environment rendering.'
        },
        {
            id: 'dondra-ep3',
            title: 'Whatever Became of Dondra | Episode 3 - Into the Dark',
            duration: '4:52',
            views: '1,300',
            uploaded: '5 months ago',
            category: 'narrative',
            badgeText: 'Episode 3',
            youtubeId: 'gWvFrFKl1G8',
            thumbnail: 'assets/gWvFrFKl1G8.jpg',
            description: 'Dondra descends into the underground, searching for clues. The cinematography plays with deep shadows, neon contrast, and tense musical scoring generated by AI.'
        },
        {
            id: 'mark-vs-ai',
            title: 'Mark vs. AI - Replaced by AI - Loss of Purpose - Produced by SAMI-AI-Studios',
            duration: '4:47',
            views: '31',
            uploaded: '6 months ago',
            category: 'narrative',
            badgeText: 'Short Film',
            youtubeId: 'iNg_-zXxXvU',
            thumbnail: 'assets/iNg_-zXxXvU.jpg',
            description: 'A timely psychological short film examining the anxiety of being replaced by machine learning algorithms, told through the perspective of a creative named Mark.'
        },
        {
            id: 'shutdown-showdown',
            title: 'Shutdown Showdown - Can You Handle the Truth? Worst Foot Forward News',
            duration: '3:01',
            views: '56',
            uploaded: '7 months ago',
            category: 'comedy',
            badgeText: 'News Parody',
            youtubeId: 'gc0Cr9EeEsE',
            thumbnail: 'assets/gc0Cr9EeEsE.jpg',
            description: 'A satirical news segment parodizing corporate and media coverage of government shut-downs. Made in a parody broadcast television format.'
        },
        {
            id: 'dondra-ep2',
            title: 'Whatever Became of Dondra - Episode 2 - Sucker Punched',
            duration: '10:22',
            views: '398',
            uploaded: '7 months ago',
            category: 'narrative',
            badgeText: 'Episode 2',
            youtubeId: '8KYvRv_Q0wQ',
            thumbnail: 'assets/8KYvRv_Q0wQ.jpg',
            description: 'Reeling from the initial shock, Dondra faces unexpected physical and emotional threats. A longer episode focusing on dialogue-driven suspense.'
        },
        {
            id: 'oil-change-review',
            title: 'Two Years Without An Oil Change - Did I Ruin My Truck?',
            duration: '4:17',
            views: '162',
            uploaded: '8 months ago',
            category: 'reviews',
            badgeText: 'DIY / Vlog',
            youtubeId: 'll5t9gMPL6A',
            thumbnail: 'assets/ll5t9gMPL6A.jpg',
            description: 'A DIY vlog checking up on an engine that survived two years without an oil change. The lab experiments with blending real-life footage and AI-assisted diagrams.'
        },
        {
            id: 'dondra-pilot',
            title: 'Whatever Became of Dondra | Pilot | Last Days of Innocence',
            duration: '10:48',
            views: '487',
            uploaded: '8 months ago',
            category: 'narrative',
            badgeText: 'Pilot',
            youtubeId: 'e-JWw4D9tHI',
            thumbnail: 'assets/e-JWw4D9tHI.jpg',
            description: 'The pilot episode that launched the series. Explore the initial days of Dondra and the circumstances that set up the multi-part mystery.'
        },
        {
            id: 'rat-party-news',
            title: '$400K Rat Party & Shutdown Showdown | Worst Foot Forward Ep.1 (Non Partisan News Parody)',
            duration: '3:18',
            views: '36',
            uploaded: '8 months ago',
            category: 'comedy',
            badgeText: 'Episode 1',
            youtubeId: 'mc6cyWQiH7o',
            thumbnail: 'assets/mc6cyWQiH7o.jpg',
            description: 'The debut episode of Worst Foot Forward Parody News, highlighting a hypothetical $400K municipal spending blowout.'
        },
        {
            id: 'dondra-trailer1',
            title: 'Whatever Became of Dondra | Trailer | A Promising Future Vanishes',
            duration: '3:08',
            views: '922',
            uploaded: '9 months ago',
            category: 'narrative',
            badgeText: 'Trailer',
            youtubeId: '2FzM4LCgJOo',
            thumbnail: 'assets/2FzM4LCgJOo.jpg',
            description: 'Official trailer for "Whatever Became of Dondra", outlining the core conflict and mood of the dramatic AI series.'
        },
        {
            id: 'dondra-trailer2',
            title: 'Whatever Became of Dondra| Trailer |Hardly Privileged. Flashes of Brilliance. Flawed by Innocence.',
            duration: '3:05',
            views: '91',
            uploaded: '10 months ago',
            category: 'narrative',
            badgeText: 'Trailer 2',
            youtubeId: 'P9TlkVyYfeE',
            thumbnail: 'assets/P9TlkVyYfeE.jpg',
            description: 'An alternative cinematic trailer highlighting character traits and thematic styling of the mystery series.'
        },
        {
            id: 'karen-vs-ai',
            title: 'Karen vs AI',
            duration: '2:41',
            views: '100',
            uploaded: '10 months ago',
            category: 'comedy',
            badgeText: 'Comedy Short',
            youtubeId: 'qaE66bNdP_Y',
            thumbnail: 'assets/qaE66bNdP_Y.jpg',
            description: 'A humorous short film showing the ultimate showdown between an entitled customer and an automated, unflappable AI cashier bot.'
        },
        {
            id: 'veo-review',
            title: 'Veo 3 Amazing! but sometimes frustrating :(',
            duration: '2:51',
            views: '141',
            uploaded: '11 months ago',
            category: 'reviews',
            badgeText: 'Tech Review',
            youtubeId: 'ycy_-AM8w6g',
            thumbnail: 'assets/ycy_-AM8w6g.jpg',
            description: 'An honest review of the Veo 3 camera system, exploring its features, AI editing automation, and the occasional bugs encountered in the field.'
        },
        {
            id: 'road-home',
            title: 'A Road Home The Echo of a Bullet',
            duration: '2:46',
            views: '24',
            uploaded: '11 months ago',
            category: 'narrative',
            badgeText: 'Short Film',
            youtubeId: 'LIomd9NOkzw',
            thumbnail: 'assets/LIomd9NOkzw.jpg',
            description: 'A somber, atmospheric short film detailing a veteran\'s journey back home, dealing with memory, sounds, and emotional echoes. High focus on sound design and mood pacing.'
        }
    ];

    // --- References ---
    const videosGrid = document.getElementById('videos-grid-container');
    const dondraEpisodesContainer = document.getElementById('dondra-episodes');
    const filterTabs = document.getElementById('gallery-filters');
    const searchInput = document.getElementById('gallery-search');
    
    // Modal References
    const videoModal = document.getElementById('video-modal');
    const modalCloseBg = document.getElementById('modal-close-bg');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalTitle = document.getElementById('modal-video-title');
    const modalDesc = document.getElementById('modal-video-desc');
    const modalBadge = document.getElementById('modal-video-badge');
    const modalDuration = document.getElementById('modal-video-duration');
    const modalViews = document.getElementById('modal-video-views');
    const modalUploaded = document.getElementById('modal-video-uploaded');
    const modalYoutubeLink = document.getElementById('modal-youtube-link');
    const modalMockPlayer = document.getElementById('modal-mock-player');
    const modalBigPlayBtn = document.getElementById('modal-big-play-btn');

    // Prompt Widget References
    const btnGeneratePrompt = document.getElementById('btn-generate-prompt');
    const promptDisplay = document.getElementById('prompt-display');

    // Newsletter Form References
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterEmail = document.getElementById('newsletter-email');
    const newsletterFeedback = document.getElementById('newsletter-feedback');

    // Mobile Navigation Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navbar = document.getElementById('navbar');

    // --- Mobile Nav Logic ---
    if (mobileToggle && navbar) {
        mobileToggle.addEventListener('click', () => {
            navbar.classList.toggle('open');
            mobileToggle.classList.toggle('open');
        });

        // Close nav when clicking a link
        const navLinks = document.querySelectorAll('.nav-item');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('open');
                mobileToggle.classList.remove('open');
            });
        });
    }

    // --- Header Scrolled Effect ---
    window.addEventListener('scroll', () => {
        const header = document.getElementById('main-header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Smooth Active Link Highlight on Scroll ---
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });

        // Fallback for landing page top
        if (window.pageYOffset < 100) {
            navItems.forEach(item => item.classList.remove('active'));
            document.getElementById('link-home').classList.add('active');
        }
    });

    // --- Filter & Render Dondra Series Episodes ---
    function renderDondraEpisodes() {
        if (!dondraEpisodesContainer) return;
        
        // Filter out Dondra episodes and sort them logically
        const dondraEpisodes = videoData
            .filter(v => v.title.toLowerCase().includes('dondra') && !v.title.toLowerCase().includes('trailer'))
            .sort((a, b) => {
                // Sorting helper based on Episode numbers
                const getEpNum = (title) => {
                    const match = title.match(/episode\s*(\d+)/i);
                    if (match) return parseInt(match[1]);
                    if (title.toLowerCase().includes('pilot')) return 0;
                    return 99; // Fallback
                };
                return getEpNum(a.title) - getEpNum(b.title);
            });

        dondraEpisodesContainer.innerHTML = '';
        
        dondraEpisodes.forEach(ep => {
            const isPilot = ep.title.toLowerCase().includes('pilot');
            const epNumText = isPilot ? 'Pilot' : `Ep ${ep.title.match(/episode\s*(\d+)/i)?.[1] || ''}`;
            
            const epItem = document.createElement('div');
            epItem.className = 'episode-item';
            epItem.innerHTML = `
                <div class="ep-left">
                    <span class="ep-num">${epNumText}</span>
                    <span class="ep-title" title="${ep.title}">${ep.title.replace(/Whatever Became of Dondra\s*\|\s*/i, '').replace(/Whatever Became of Dondra\s*-\s*/i, '')}</span>
                </div>
                <span class="ep-duration">${ep.duration}</span>
            `;
            
            epItem.addEventListener('click', () => {
                openVideoModal(ep);
            });
            
            dondraEpisodesContainer.appendChild(epItem);
        });
    }

    // --- Render Video Gallery Dashboard ---
    function renderVideos(filter = 'all', searchQuery = '') {
        if (!videosGrid) return;
        videosGrid.innerHTML = '';

        const filteredVideos = videoData.filter(video => {
            const matchesCategory = filter === 'all' || video.category === filter;
            const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                 video.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        if (filteredVideos.length === 0) {
            videosGrid.innerHTML = `
                <div class="grid-loading">
                    No videos match your filter or search query. Try another keyword!
                </div>
            `;
            return;
        }

        filteredVideos.forEach(video => {
            const card = document.createElement('article');
            card.className = 'video-card';
            
            // Format category class
            const categoryClass = video.category;
            let displayCategory = 'Short Film';
            if (video.category === 'comedy') displayCategory = 'Comedy Parody';
            if (video.category === 'reviews') displayCategory = 'DIY / Tech Review';

            // Safe Title slice for card thumbnail fallback
            const shortTitle = video.title.split(' - ')[0].split(' | ')[0];

            const thumbnailHTML = video.thumbnail 
                ? `<img src="${video.thumbnail}" alt="${video.title}" class="thumbnail-img">`
                : `<div class="thumbnail-img-fallback"><span>${shortTitle}</span></div>`;

            card.innerHTML = `
                <div class="card-thumbnail">
                    ${thumbnailHTML}
                    <div class="thumbnail-decor">
                        <div class="decor-glow"></div>
                    </div>
                    <button class="card-play-btn" aria-label="Play video details">
                        <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </button>
                    <span class="card-duration">${video.duration}</span>
                </div>
                <div class="card-content">
                    <span class="card-badge ${categoryClass}">${video.badgeText || displayCategory}</span>
                    <h4 class="card-title">${video.title}</h4>
                    <p class="card-desc">${video.description}</p>
                    <div class="card-meta-row">
                        <span class="card-views">👁️ ${video.views} views</span>
                        <span class="card-uploaded">📅 ${video.uploaded}</span>
                    </div>
                </div>
            `;

            // Open Modal on Card Click
            const clickTrigger = card.querySelector('.card-thumbnail');
            const titleTrigger = card.querySelector('.card-title');
            
            [clickTrigger, titleTrigger].forEach(el => {
                el.addEventListener('click', () => {
                    openVideoModal(video);
                });
            });

            videosGrid.appendChild(card);
        });
    }

    // --- Modal Logic ---
    function openVideoModal(video) {
        if (!videoModal) return;

        modalTitle.textContent = video.title;
        modalDesc.textContent = video.description;
        
        let displayCategory = 'AI Short Film';
        if (video.category === 'comedy') displayCategory = 'Comedy / Satire';
        if (video.category === 'reviews') displayCategory = 'Tech & DIY Review';
        
        modalBadge.textContent = video.badgeText ? `${displayCategory} • ${video.badgeText}` : displayCategory;
        modalDuration.textContent = `⏳ ${video.duration}`;
        modalViews.textContent = `👁️ ${video.views} views`;
        modalUploaded.textContent = `📅 ${video.uploaded}`;
        
        // Build direct link on YouTube for this specific video
        const youtubeUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;
        
        modalYoutubeLink.setAttribute('href', youtubeUrl);
        
        // Setup mock player click behaviour
        const openYoutubeTab = (e) => {
            e.preventDefault();
            window.open(youtubeUrl, '_blank', 'noopener,noreferrer');
        };
        
        modalMockPlayer.onclick = openYoutubeTab;
        modalBigPlayBtn.onclick = openYoutubeTab;

        videoModal.classList.add('active');
        videoModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Lock body scroll
    }

    function closeVideoModal() {
        if (!videoModal) return;
        videoModal.classList.remove('active');
        videoModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Release body scroll
    }

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeVideoModal);
    if (modalCloseBg) modalCloseBg.addEventListener('click', closeVideoModal);
    
    // Close modal on Escape Key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
            closeVideoModal();
        }
    });

    // Wire up spotlight visual play buttons to open trailer modals
    document.querySelectorAll('.btn-play-trailer').forEach(btn => {
        btn.addEventListener('click', () => {
            const videoId = btn.getAttribute('data-id');
            const targetVideo = videoData.find(v => v.id === videoId);
            if (targetVideo) {
                openVideoModal(targetVideo);
            }
        });
    });

    // Wire up spotlight compact episode lists (Chancey and Chuck items)
    document.querySelectorAll('.compact-ep').forEach(el => {
        el.addEventListener('click', () => {
            const videoId = el.getAttribute('data-id');
            const targetVideo = videoData.find(v => v.id === videoId);
            if (targetVideo) {
                openVideoModal(targetVideo);
            }
        });
    });

    // --- Search & Filter Setup ---
    if (filterTabs) {
        filterTabs.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-tab')) {
                // Toggle active tab class
                document.querySelectorAll('.filter-tab').forEach(tab => tab.classList.remove('active'));
                e.target.classList.add('active');

                const selectedFilter = e.target.getAttribute('data-filter');
                const searchQuery = searchInput ? searchInput.value : '';
                renderVideos(selectedFilter, searchQuery);
            }
        });
    }

    if (searchInput) {
        let timeout = null;
        searchInput.addEventListener('input', (e) => {
            // Debounce search slightly
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                const activeTab = document.querySelector('.filter-tab.active');
                const filter = activeTab ? activeTab.getAttribute('data-filter') : 'all';
                renderVideos(filter, e.target.value);
            }, 250);
        });
    }

    // --- AI Prompt Synthesizer Logic ---
    const promptComponents = {
        genres: [
            "Sci-Fi Noir", "Cyberpunk Psychological Drama", "Retro-Futuristic Comedy",
            "Experimental Dreamcore", "Indie Cinema Verite", "Dystopian Sci-Fi Mystery",
            "Socio-Political Parody", "Surreal Dark Comedy"
        ],
        topics: [
            "a retro robotic telephone spam filter that gains sentience and starts advising scammers on life choices",
            "an AI scriptwriter that accidentally writes the timeline of its own creators, predicting their minor mistakes",
            "a parent discovering their house is entirely run by passive-aggressive home smart appliances",
            "a vintage film projectionist who gets trapped inside a loop of a 1976 Provincetown vacation recording",
            "a mechanical truck dashboard that refuses to start unless the driver writes it a handwritten apology poem",
            "a lonely office worker competing against a corporate AI cashier bot in a high-speed customer greeting contest"
        ],
        styles: [
            "1970s grainy color film, high-contrast anamorphic lenses, warm amber glows",
            "Hyperrealistic Veo 3 camera system, sharp digital details, cold neon blue undertones",
            "Vibrant, colorful vintage cartoon animation, chunky frame offsets, playful voice dynamics",
            "Dark moody glassmorphism, dreamlike focus depth, slow pan and nebula smoke effects",
            "Satirical low-budget news broadcast style, tracking errors, pixelated title cards"
        ],
        twists: [
            "only to realize the AI was actually reading human memories the entire time.",
            "but every character's dialogue is generated strictly from vintage telephone spam calls.",
            "revealing that the entire plot is just an oil change guide recorded in reverse.",
            "leading to a final showdown between human stubbornness and machine algorithms."
        ]
    };

    if (btnGeneratePrompt && promptDisplay) {
        btnGeneratePrompt.addEventListener('click', () => {
            // Disable button during synthesis to show active generation state
            btnGeneratePrompt.disabled = true;
            btnGeneratePrompt.textContent = "⚡ Synthesizing...";
            promptDisplay.textContent = "";
            promptDisplay.classList.remove('synthesized');

            // Select random components
            const selectRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
            
            const genre = selectRandom(promptComponents.genres);
            const topic = selectRandom(promptComponents.topics);
            const style = selectRandom(promptComponents.styles);
            const twist = selectRandom(promptComponents.twists);

            const pitch = `GENRE: ${genre}\n\nSTORY: A film about ${topic}, ${twist}\n\nVISUAL STYLE: ${style}\n\nSTATUS: Seeding AI Video Generators... Done.`;

            // Typwriter effect
            let i = 0;
            const speed = 12; // ms per char
            
            function typeWriter() {
                if (i < pitch.length) {
                    // Convert line breaks to HTML breaks
                    const char = pitch.charAt(i);
                    if (char === '\n') {
                        promptDisplay.innerHTML += '<br>';
                    } else {
                        promptDisplay.innerHTML += char;
                    }
                    i++;
                    setTimeout(typeWriter, speed);
                } else {
                    // Generation complete
                    btnGeneratePrompt.disabled = false;
                    btnGeneratePrompt.textContent = "⚡ Generate Film Pitch";
                    promptDisplay.classList.add('synthesized');
                }
            }
            
            // Kick off typing
            setTimeout(typeWriter, 400);
        });
    }

    // --- Newsletter Form Logic ---
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterEmail.value.trim();
            const submitBtn = document.getElementById('btn-newsletter-submit');
            
            if (!email) return;

            // Simple micro-animation state on submit button
            submitBtn.disabled = true;
            submitBtn.textContent = "Subscribing...";
            newsletterFeedback.className = "form-feedback";
            newsletterFeedback.textContent = "";

            // Simulate server network delays
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = "Subscribe";
                
                newsletterFeedback.classList.add('success');
                newsletterFeedback.textContent = "Success! You are now subscribed to Sami-AI briefings.";
                newsletterForm.reset();

                // Clear success message after 5 seconds
                setTimeout(() => {
                    newsletterFeedback.textContent = "";
                }, 5000);
            }, 1200);
        });
    }

    // --- Initialization ---
    renderDondraEpisodes();
    renderVideos('all', '');
});
