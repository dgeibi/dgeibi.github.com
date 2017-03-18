/* eslint-env commonjs */
/* global $: true, $$: true */
/* eslint-disable func-names,no-console*/

function load(name, definition) {
  var hasExports = typeof exports === 'object' && exports
  if (hasExports) {
    exports[name] = definition
  } else {
    this[name] = definition
  }
}

(function load$() {
  'use strict'

  function $(selector, context) {
    var range = context || document
    return range.querySelector(selector)
  }

  $.$ = function $$(selector, context) {
    var range = context || document
    var elements = null
    if (typeof selector !== 'string') return [].slice.call(selector)
    elements = range.querySelectorAll(selector)
    return [].slice.call(elements)
  }

  /* https://gist.github.com/joshcanhelp/a3a669df80898d4097a1e2c01dea52c1 */
  $.scrollToPos = function scrollToPos(scrollPosition, scrollDuration) {
    var target
    var start
    var distanceSum
    var position
    var duration = 500


    switch (typeof scrollPosition) {
      case 'string':
        target = document.querySelector(scrollPosition)
        if (target) {
          position = window.pageYOffset + target.getBoundingClientRect().top
        } else {
          throw new Error('error: No element found with the selector "' + scrollPosition + '"')
        }
        break
      case 'number':
        if (scrollPosition >= 0) {
          position = scrollPosition
        } else {
          throw new Error('error: scrollPosition should not be a negative number')
        }
        break
      default:
        position = 0
    }

    if (typeof scrollDuration === 'number' && scrollDuration > 0) {
      duration = scrollDuration
    }

    distanceSum = window.pageYOffset - position

    function step(timestamp) {
      var percent
      var distance
      var moveStep
      if (!start) {
        start = timestamp
        requestAnimationFrame(step)
        return
      }
      percent = Math.min(1, (timestamp - start) / duration)
      distance = (1 - percent) * distanceSum
      moveStep = position + distance
      window.scrollTo(0, moveStep)
      if (percent < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }

  load('$', $)
  load('$$', $.$)
}())

/* sw */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function (reg) {
      console.log('Registration succeeded. Scope is ' + reg.scope)
    }).catch(function (error) {
      console.log('Registration failed with ' + error)
    })
}

/* add table-wrapper */
$$('.post-content>table').forEach(function (table) {
  var div = document.createElement('div')
  var range = document.createRange()
  div.className = '_table-wrapper'
  range.selectNode(table)
  range.surroundContents(div)
});

/* back to top */
(function () {
  var topBtn = $('[data-js-backtotop]')
  function backToTop() {
    if (window.pageYOffset > 100) {
      topBtn.classList.add('show')
    } else {
      topBtn.classList.remove('show')
    }
  }
  backToTop()
  window.addEventListener('scroll', backToTop)
  topBtn.addEventListener('click', $.scrollToPos)
}())

/* toc scroll */
$$('.toc li a').forEach(function handleLink(link) {
  link.addEventListener('click', function handler(event) {
    var hash
    event.preventDefault()
    hash = decodeURIComponent(this.hash)
    $.scrollToPos(hash)
    window.location.hash = hash
  }, false)
})
