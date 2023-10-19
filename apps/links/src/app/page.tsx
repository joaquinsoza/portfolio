import Link from "next/link";
import { Button } from "ui";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#FAF8EF] to-[#5E5C54] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
        </h1>
        <Button>ss</Button>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">First Steps →</h3>
            <div className="text-lg">
              Just the basics - Everything you need to know to set up your
              database and authentication.
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://create.t3.gg/en/introduction"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Documentation →</h3>
            <div className="text-lg">
              Learn more about Create T3 App, the libraries it uses, and how to
              deploy it.
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}


// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8" />
//   <link rel="shortcut icon" href="./media/logo.png" />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   <meta name="theme-color" content="#343a40" />
//   <meta
//           name="description"
//           content="Links To My Accounts | Developed By - Joaquín Soza"
//   />
//   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
//   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
//      <title>Links - Joaquín Soza</title>
//      <style>
//        body{
//          background-color: #faf8ef;
//        }
//        h5{
//              color: #343a40;
//        }
//        .name{
//            color: #343a40;
//        }
//        .love{
//            color: #343a40 !important;
//        }
//        /*----------------- Mail-------------------- */
//        #email{
//            text-decoration: none;
//            float: right;
//            color:#343a40;
//        }
//        .footer{
//            margin-top: 5% !important;
//            margin-bottom: 10px;
//        }
//        @media (max-width: 479px) {
//             .footer{
//             margin-top: 35% !important;
//             }
//        }
//      </style>
// </head>
// <body>
// <div class="container">
//   <div class="media mt-5">
//     <img src="./media/logo.png" class="m-3" alt="image" width="75px" height="75px">
//     <div class="media-body m-2">
//       <h5 class="align-items-center mt-2">Joaquín Soza</h5>
//       <p>Hello!
//       I'm a Full Stack Developer based in Plymouth, England.</p>
//     </div>
//   </div>
// <div class="mt-4">
//   <a class="btn btn-outline-dark btn-block" role="button" target="_blank"><i class="fa fa-code">&nbsp;</i>Portfolio (in Progress)</a>
//   <br>
//   <a href="https://linkedin.com/in/joaquinsoza" class="btn btn-outline-dark btn-block" role="button" target="_blank"><i class="fab fa-linkedin">&nbsp;</i>Linkedin</a>
//   <br>
//   <a href="https://github.com/joaquinsoza" class="btn btn-outline-dark btn-block" role="button" target="_blank"><i class="fab fa-github">&nbsp;</i>Github</a>
//   <br>
//   <a href="https://t.me/yRipper" class="btn btn-outline-dark btn-block" role="button" target="_blank"><i class="fab fa-telegram">&nbsp;</i>Telegram</a>
//   <br>
//   <a href="https://joaquinsoza.dev/cv" class="btn btn-outline-dark btn-block" role="button" target="_blank"><i class="fas fa-file-alt">&nbsp;</i>Resume/CV</a>
// </div>
//         <!--------------------Footer---------------------------->
//   <div class="footer mt-5">
//     <hr/>
//     <h6>Made With <span class="love">♥</span> in Santiago, Chile</h6>
//     <h6>
//       Proudly Hosted By
//       <a href="https://joaquinsoza.dev" class="name" target="_blank"> Joaquín Soza </a>
//       <a id="email" href="mailto:contact@joaquinsoza.dev"> <i class="fa fa-envelope"> </i> </a>
//     </h6>
//   </div>
// </div>
// </body>

// </html>