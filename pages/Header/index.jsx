
  import { useEffect } from 'react';
  import axios from 'axios';
  
  export default function Header() {
  
    useEffect(() => {
      getData();
    }, [])
   
    async function getData() {
      
      axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/63137841-dba6-4b4d-92f6-aea4e68c9fd5/Website8/Header/index.html").then(res=>{
        console.log("res=> ",res);
        document.getElementById("HeaderID").innerHTML = res.data;
        
        //* css
        axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/63137841-dba6-4b4d-92f6-aea4e68c9fd5/Website8/Header/style.css").then(CssRes=>{
          console.log("CssRes", CssRes);
          let createCssElement = document.createElement("style");
          // createCssElement.nodeValue = CssRes.data;
          createCssElement.appendChild(document.createTextNode(CssRes.data));
          
          document.getElementById("HeaderID").appendChild(createCssElement)
          axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/63137841-dba6-4b4d-92f6-aea4e68c9fd5/Website8/Header/script.js").then(JsRes=>{
            console.log("JsRes", JsRes);
            eval(JsRes.data)
          })
        })
      })
  
    }
    
  
    return (
      <div id='HeaderID'>
      </div>
    )
  }