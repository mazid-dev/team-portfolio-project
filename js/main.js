// ============================================
// MAIN APPLICATION - COMPLETE
// ============================================

(function() {
    'use strict';

    // ===== GET INITIALS =====
    function getInitials(name) {
        var parts = name.split(' ');
        var initials = '';
        for (var i = 0; i < parts.length; i++) {
            if (parts[i].length > 0) {
                initials += parts[i][0].toUpperCase();
            }
        }
        return initials.substring(0, 2);
    }

    // ===== GET COLOR =====
    function getColor(index) {
        var colors = [
            'linear-gradient(135deg, #6c63ff, #764ba2)',
            'linear-gradient(135deg, #ff6584, #ff6b6b)',
            'linear-gradient(135deg, #00b894, #00cec9)',
            'linear-gradient(135deg, #fdcb6e, #e17055)'
        ];
        return colors[index % colors.length];
    }

    // ===== GET SKILL EMOJI =====
    function getSkillEmoji(skill) {
        var emojis = {
            'AWS': '☁️', 'Docker': '🐳', 'Kubernetes': '☸️', 'Terraform': '🏗️',
            'Linux': '🐧', 'Cisco': '🌐', 'MikroTik': '📡', 'GitHub Actions': '⚡',
            'Jenkins': '🔧', 'OSPF': '🔄', 'BGP': '🌍', 'VLAN': '🔀',
            'NAT': '🔗', 'Firewall': '🛡️', 'VPN': '🔒', 'Nagios': '📊',
            'Zabbix': '📈', 'MPLS': '🔵', 'EIGRP': '🟣', 'ACL': '📋',
            'SIEM': '🛡️', 'Palo Alto': '🔴', 'Fortinet': '🟠', 'IDS/IPS': '👁️',
            'Security Auditing': '✅', 'Vulnerability Assessment': '🔍',
            'Network Monitoring': '📡', 'Windows Server': '🪟',
            'Hardware Troubleshooting': '🔧', 'Load Balancing': '⚖️',
            'PPPoE': '📶', 'DHCP': '🌐', 'Cisco CCNA': '🌐', 'MikroTik MTCNA': '📡'
        };
        return emojis[skill] || '🔹';
    }

    // ===== LOAD TEAM =====
    function loadTeam() {
        var container = document.getElementById('teamContainer');
        if (!container) return;
        
        var html = '';
        for (var i = 0; i < teamMembers.length; i++) {
            var m = teamMembers[i];
            
            // Skills (max 8)
            var skillsHtml = '';
            var maxSkills = 8;
            for (var j = 0; j < Math.min(m.skills.length, maxSkills); j++) {
                skillsHtml += '<span>' + m.skills[j] + '</span>';
            }
            if (m.skills.length > maxSkills) {
                skillsHtml += '<span class="more">+' + (m.skills.length - maxSkills) + ' more</span>';
            }
            
            // Experience (max 2)
            var expHtml = '';
            for (var k = 0; k < Math.min(m.experience.length, 2); k++) {
                var exp = m.experience[k];
                expHtml += '<div class="exp-item">';
                expHtml += '<strong>' + exp.role + '</strong> at ' + exp.company;
                expHtml += '<span class="exp-period">' + exp.period + '</span>';
                expHtml += '</div>';
            }
            
            var initials = getInitials(m.name);
            var color = getColor(i);
            
            html += '<div class="team-card">';
            html += '<div class="avatar" style="background: ' + color + ';">' + initials + '</div>';
            html += '<h3>' + m.name + '</h3>';
            html += '<p class="role">' + m.role + '</p>';
            
            // Academic Info
            html += '<div class="academic-info">';
            html += '<div class="uni"><i class="fas fa-university"></i> ' + m.university + '</div>';
            html += '<div class="id"><i class="fas fa-id-card"></i> ID: ' + m.studentId + '</div>';
            html += '</div>';
            
            html += '<p class="bio">' + m.bio + '</p>';
            html += '<div class="skills">' + skillsHtml + '</div>';
            html += '<div class="experience-summary">' + expHtml + '</div>';
            html += '</div>';
        }
        container.innerHTML = html;
        console.log('✅ Team loaded: ' + teamMembers.length + ' members');
    }

    // ===== LOAD SKILLS =====
    function loadSkills() {
        var container = document.getElementById('skillsContainer');
        if (!container) return;
        
        // Count skills
        var skillCount = {};
        for (var i = 0; i < teamMembers.length; i++) {
            var skills = teamMembers[i].skills;
            for (var j = 0; j < skills.length; j++) {
                var s = skills[j];
                skillCount[s] = (skillCount[s] || 0) + 1;
            }
        }
        
        var colors = ['purple', 'pink', 'green', 'blue', 'orange', 'red', 'teal', 'indigo'];
        var colorIndex = 0;
        
        var html = '';
        var sorted = Object.keys(skillCount).sort();
        for (var k = 0; k < sorted.length; k++) {
            var skill = sorted[k];
            var percent = Math.round((skillCount[skill] / teamMembers.length) * 100);
            var emoji = getSkillEmoji(skill);
            var color = colors[colorIndex % colors.length];
            colorIndex++;
            
            html += '<div class="skill-item" data-color="' + color + '">';
            html += '<span class="skill-icon">' + emoji + '</span>';
            html += '<h4>' + skill + '</h4>';
            html += '<div class="skill-bar-wrap">';
            html += '<div class="fill" data-width="' + percent + '"></div>';
            html += '</div>';
            html += '<div class="percent-wrap">';
            html += '<span class="label">Proficiency</span>';
            html += '<span class="percent">' + percent + '%</span>';
            html += '</div>';
            html += '</div>';
        }
        container.innerHTML = html;
        
        // Animate
        setTimeout(function() {
            var fills = document.querySelectorAll('.skill-bar-wrap .fill');
            for (var f = 0; f < fills.length; f++) {
                var w = fills[f].getAttribute('data-width');
                if (w) {
                    fills[f].style.width = w + '%';
                }
            }
        }, 300);
        
        console.log('✅ Skills loaded');
    }

    // ===== LOAD PROJECTS =====
    function loadProjects() {
        var container = document.getElementById('projectContainer');
        if (!container) return;
        
        var html = '';
        for (var i = 0; i < projects.length; i++) {
            var p = projects[i];
            var techHtml = '';
            for (var j = 0; j < p.tech.length; j++) {
                techHtml += '<span>' + p.tech[j] + '</span>';
            }
            var emoji = p.title.match(/^.{1,2}/);
            var icon = emoji ? emoji[0] : '🚀';
            var title = p.title.replace(/^.{1,2}\s/, '');
            
            html += '<div class="project-card">';
            html += '<div class="icon">' + icon + '</div>';
            html += '<h3>' + title + '</h3>';
            html += '<p>' + p.description + '</p>';
            html += '<div class="tech">' + techHtml + '</div>';
            html += '</div>';
        }
        container.innerHTML = html;
        console.log('✅ Projects loaded: ' + projects.length + ' projects');
    }

    // ===== CONTACT FORM =====
    function setupContact() {
        var form = document.getElementById('contactForm');
        if (!form) return;
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var btn = form.querySelector('.btn');
            var originalText = btn.textContent;
            btn.textContent = '⏳ Sending...';
            btn.disabled = true;
            
            setTimeout(function() {
                alert('✅ Thank you! We will get back to you soon.');
                form.reset();
                btn.textContent = originalText;
                btn.disabled = false;
            }, 1500);
        });
        console.log('✅ Contact form ready');
    }

    // ===== NAVIGATION =====
    function setupNav() {
        var hamburger = document.getElementById('hamburger');
        var navLinks = document.getElementById('navLinks');
        var links = document.querySelectorAll('.nav-links a');
        
        if (hamburger && navLinks) {
            hamburger.addEventListener('click', function() {
                this.classList.toggle('active');
                navLinks.classList.toggle('active');
            });
        }
        
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function() {
                if (hamburger) hamburger.classList.remove('active');
                if (navLinks) navLinks.classList.remove('active');
            });
        }
        
        window.addEventListener('scroll', function() {
            var current = '';
            var sections = document.querySelectorAll('section');
            for (var i = 0; i < sections.length; i++) {
                var top = sections[i].offsetTop - 100;
                if (window.scrollY >= top) {
                    current = sections[i].getAttribute('id');
                }
            }
            for (var j = 0; j < links.length; j++) {
                links[j].classList.remove('active');
                if (links[j].getAttribute('href') === '#' + current) {
                    links[j].classList.add('active');
                }
            }
        });
        
        console.log('✅ Navigation ready');
    }

    // ===== SMOOTH SCROLL =====
    function setupScroll() {
        var links = document.querySelectorAll('a[href^="#"]');
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function(e) {
                e.preventDefault();
                var target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
        console.log('✅ Smooth scroll ready');
    }

    // ===== INIT =====
    function init() {
        console.log('🚀 Team Portfolio initializing...');
        
        if (typeof teamMembers === 'undefined' || typeof projects === 'undefined') {
            console.error('❌ Data not loaded! Check team-data.js');
            return;
        }
        
        loadTeam();
        loadSkills();
        loadProjects();
        setupContact();
        setupNav();
        setupScroll();
        
        console.log('✅ Team Portfolio ready! ' + teamMembers.length + ' members loaded.');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();