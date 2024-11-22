        // Sélection du bouton

        const button = document.getElementById('submit_button');

        // Ajout d'un gestionnaire d'événement
        button.addEventListener('click', () => {


            let val = 0;

            //rate verification
            let radios = document.getElementsByName("rating");

            for(let i = 0; i < radios.length; i++) {
                if(radios[i].checked) {
                    val = i + 1;
                    break;
                }
            }



            //clean card
            document.getElementById('rating_box').innerHTML = "";

            generateSubmit(val);
        });

        function generateSubmit(number){
            let main = document.getElementById('rating_box');

            // image creation
            let img = document.createElement("img");
            img.setAttribute("id","illustration")
            img.src = "images/illustration-thank-you.svg";
            main.appendChild(img);

            // txt creation
            let selected = document.createElement("p");
            selected.setAttribute("id","selected");
            selected.innerHTML = "You selected " + number + " Out of 5";
            main.appendChild(selected);

            // title creation
            let title = document.createElement("h1");
            title.setAttribute("id","title");
            title.innerHTML = "Thank you!";
            main.appendChild(title);

            // para creation
            let paragraphe = document.createElement("p");
            paragraphe.setAttribute("id","subPara");
            paragraphe.innerHTML = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
            main.appendChild(paragraphe);


        }




