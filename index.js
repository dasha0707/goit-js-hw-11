import{a as f,S as d,i as a}from"./assets/vendor-B4VkUtbg.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m=void 0,g="https://pixabay.com/api/";function y(o){return f.get(g,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(r=>r.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const r=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:i,comments:u,downloads:p})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${e}"
            />
          </a>
          <div class="image-info">
            <p><b>Likes</b><span>${t}</span></p>
            <p><b>Views</b><span>${i}</span></p>
            <p><b>Comments</b><span>${u}</span></p>
            <p><b>Downloads</b><span>${p}</span></p>
          </div>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){l.innerHTML=""}function S(){c.classList.add("is-visible")}function v(){c.classList.remove("is-visible")}const q=document.querySelector(".form");q.addEventListener("submit",o=>{o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();r&&(L(),S(),y(r).then(s=>{if(s.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(s.hits)}).catch(s=>{a.error({message:"Something went wrong. Please try again later!",position:"topRight"}),console.log(s)}).finally(()=>{v()}),o.currentTarget.reset())});
//# sourceMappingURL=index.js.map
