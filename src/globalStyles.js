import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
   --background: #0d1321ff;
   --black:#0d1321ff;
   --purple:#803bec;
   --pink:#e5a1f8;
   --white:#ffff;
   --nav:#efefef;
   --nav2:#3f3d56;
   --brown: #A23103ff;
   --rust: #B04608ff;
   --moonstone: #719EA9ff;
   --sepia: #553304ff;
   --night: #0B0E0Cff;
   --rich-black: #0d1321ff;
   --prussian-blue: #1d2d44ff;
   --paynes-gray: #3e5c76ff;
   --silver-lake-blue: #748cabff;
   --eggshell: #EFEFEF;

}


*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Montserrat', sans-serif;
}
html{
  ${"" /* overflow-y: scroll; */}
  scroll-behavior:smooth;
  
}
    body,
    html,
    a {
        font-family: 'Montserrat', sans-serif;
            }
    body {

        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: var(--background);

        overflow-x: hidden;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin:0;
        padding:0;
    }
    a {

        text-decoration: none;
        outline: none;
    }
    button{
        border:none;
        outline:none;
        &:focus{
            outline:none;
        }
    }

    *:focus {
        outline: none;
    }

    img,svg{
        width:100%;
        height:auto;
    }


`;

//  /* Colors */
