let s=null,u=!1,q=new Set,b=()=>{u||(u=!0,Promise.resolve().then(()=>{q.forEach(v=>v()),q.clear(),u=!1}))}
export const signal=(v)=>{let f=v,n=new Set;return v=>(v===void 0?(s&&n.add(s),f):(f=v,n.forEach(e=>q.add(e)),b(),f))}
export const effect=(v)=>(s=v,v(),s=null)
export const render=(n,v)=>{customElements.define(n,class
extends HTMLElement{connectedCallback(){this.c=effect(()=>v(this))}disconnectedCallback(){this.c&&this.c()}})}