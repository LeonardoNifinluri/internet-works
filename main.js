import '/styles/style.css'
import $ from 'jquery'

//example of using function from different js file
// export function setupCounter(element) {
//     let counter = 0
//     const setCounter = (count) => {
//       counter = count
//       element.innerHTML = `count is ${counter}`
//     }
//     element.addEventListener('click', () => setCounter(counter + 1))
//     setCounter(0)
//   }
  

const page = `
<div class="main-container">
            <h1 class="title">Understanding The Internet</h1>
            <div class="hero-container">
                <img src="/internet.webp" alt="" class="hero-image">
            </div>
            <h2 class="article-header">Check These Out</h2>
            <ul class="article">
                <!-- article item flex direction row -->
                <li class="article-item">
                    <div class="link-container">
                        <a href="view/internet-basic.html">
                            <button class="btn">Internet Basic</button>
                        </a>
                    </div>
                </li>

                <li class="article-item">
                    <div class="link-container">
                        <a href="view/http-https.html">
                            <button class="btn">HTTP and HTTPS</button>
                        </a>
                    </div>
                </li>

                <li class="article-item">
                    <div class="link-container">
                        <a href="view/domain-name.html">
                            <button class="btn">Domain Name</button>
                        </a>
                    </div>                   
                </li>

                <li class="article-item">
                    <div class="link-container">
                        <a href="view/hosting.html">
                            <button class="btn">Hosting</button>
                        </a>
                    </div>
                </li>

                <li class="article-item">
                    <div class="link-container">
                        <a href="view/dns.html">
                            <button class="btn">DNS</button>
                        </a>
                    </div>
                </li>

                <li class="article-item">
                    <div class="link-container">
                        <a href="view/browser.html">
                            <button class="btn">Browser</button>
                        </a>
                    </div>
                </li>
            </ul>
            <footer>
                <h1 class="name">Leonardo Alilyamin Nifinluri</h1>
                <h2 class="NIM">D121221020</h2>
            </footer>
        </div>
`
$('#app').html(page)

