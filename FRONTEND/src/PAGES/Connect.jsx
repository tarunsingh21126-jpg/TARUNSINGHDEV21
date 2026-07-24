import { useState } from 'react'

function Connect() {
    return (
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Dev21 community</p>
          <ul>
            <li>
              <a href="https://github.com/tarunsingh21126-jpg" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="inkedin.com/in/tarun-singh-267868337/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://tarunsinghdev-21.vercel.app/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                Portfolio
              </a>
            </li>
            <li>
              <a href="https://leetcode.com/u/tarunsinghwd/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Leetcode
              </a>
            </li>
          </ul>
        </div>
    )
}

export default Connect