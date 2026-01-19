---
layout: terminal
title: About
permalink: /about/
---

<header class="site-header">
  <div class="ascii-logo">
    ABOUT DADDABASE
  </div>
</header>

<main class="terminal-content">
  <div class="command-line">
    <span class="prompt">&gt;</span>
    <span class="command">SELECT * FROM about_dadda;</span>
  </div>

  <div class="query-response">
    Query executing...
  </div>

  <div class="record-display">
    <div class="record-header">RECORD 1 OF 1</div>

    <div class="record-field">
      <div class="field-name">NAME:</div>
      <div class="field-value">Matt Walker (aka "Dadda")</div>
    </div>

    <div class="record-field">
      <div class="field-name">ROLE:</div>
      <div class="field-value">Dad, Teacher, Learner</div>
    </div>

    <div class="record-field">
      <div class="field-name">MISSION:</div>
      <div class="field-value">Sharing lessons learned with kids and anyone curious</div>
    </div>

    <div class="record-field">
      <div class="field-name">INTERESTS:</div>
      <div class="field-value">Programming, AI tools, puzzles, web development</div>
    </div>

    <div class="record-field">
      <div class="field-name">WHY:</div>
      <div class="field-value">My kids call me "Dadda" and it sounds like "data" when they say it quickly. This is my database of lessons I want to teach them.</div>
    </div>
  </div>

  <div class="query-response">
    1 record returned.
  </div>

  <div class="command-line" style="margin-top: 2rem;">
    <span class="prompt">&gt;</span>
    <span class="command">SELECT topic, description FROM future_lessons;</span>
  </div>

  <div class="query-response">
    Query executing...
  </div>

  <div class="description-block">
    <pre>BASIC PROGRAMMING
  Learn the fundamentals of coding: variables, loops, functions,
  and problem-solving. Start with simple concepts and build up to
  creating your own programs.

AI LITERACY
  Understand how to use AI tools like Claude, Gemini, and ChatGPT
  effectively. Learn what they're good at, their limitations, and
  how to ask the right questions.

SOLVING RUBIK'S CUBE
  Master the classic 3x3 cube with step-by-step methods. Learn
  algorithms, pattern recognition, and eventually speed-solving
  techniques.

BUILDING WEBSITES
  Create your own corner of the internet. Learn HTML, CSS, and
  JavaScript to build interactive web pages and applications.

...AND MORE TO COME!</pre>
  </div>

  <div class="query-response">
    Query successful. Check back soon for full lessons!
  </div>

  <div class="command-line" style="margin-top: 2rem;">
    <span class="prompt">&gt;</span>
    <span class="command">SHOW CONTACT_INFO;</span>
  </div>

  <div class="description-block">
    <pre>EMAIL: <a href="mailto:{{ site.email }}">{{ site.email }}</a>
SITE: <a href="http://mwalker.info" target="_blank" rel="noopener noreferrer">mwalker.info</a>
GITHUB: <a href="https://github.com/{{ site.github_username }}" target="_blank" rel="noopener noreferrer">github.com/{{ site.github_username }}</a>
{% if site.twitter_username %}TWITTER: <a href="https://twitter.com/{{ site.twitter_username }}" target="_blank" rel="noopener noreferrer">@{{ site.twitter_username }}</a>{% endif %}</pre>
  </div>
</main>
