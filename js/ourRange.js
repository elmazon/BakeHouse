listOfCards = document.querySelector("#product-list")
var celebrationArr = []
var childrenArr = []
var cardsToDraw = ""
var pagesToDraw = ""
var flag = "true"
var celebratonCounter = 0
var childrenCounter = 0
var counter
var pagesButton = []
pagesList = document.querySelectorAll(".pages")
children = document.querySelector("#Children")
celebration = document.querySelector("#celebration")
intro = document.querySelector("#intro")
var introStr = ""
beforeCakes = document.querySelector("#brforeCackes")
var beforeCakesStr = ""
beforeTable = document.querySelector("#beforeTable")
var beforeTableStr = ""
table = document.querySelector("#table")
var tableStr = ""

class cackCards {
    constructor(imgPath, title, desc) {
        this.imgPath = imgPath
        this.title = title
        this.desc = desc
    }
    drawFirstPageCard(e) {
        var arr = celebrationArr
        if (e == undefined || e.target.text == "Celebration Cakes") {
            introStr = "Our traditional celebration cakes are the perfect finishing touch to your special occasion. Make yours unique by selecting your base, size, colour, sides and message"
            intro.innerHTML = introStr
            beforeCakesStr = `<a href="#">Our Range</a> &#62; Celebration Cakes`
            beforeCakes.innerHTML = beforeCakesStr
            tableStr = `<h4>Our Five-Step Ordering Process</h4>
            <p class="intro">Featuring three layers of airy sponge with a fresh cream centre, they're so easy to
                order using our simple five-step system.</p>
            <ol>
                <li><span>Choose your cake base - vanilla sponge, chocolate sponge or mud cake</span></li>
                <li><span>Choose your size</span></li>
                <li><span>Choose the colour of your icing</span></li>
                <li><span>Choose your sides - grated chocolate, nougat, flaked almonds or 100s and 1000s</span>
                </li>
                <li><span>Write your special message</span></li>
            </ol>`
            table.innerHTML = tableStr
            flag = "true"
            cardsToDraw = ""
            for (let index = 0; index < 6; index++) {
                if (index == arr.length) {
                    break
                }
                cardsToDraw += `<li class="cardsLi">
                <img src="${arr[index].imgPath}" alt="Round mud cake"
                    class="img1" />
                <h4>${arr[index].title}</h4>
                <p>${arr[index].desc}</p>
                <p class="view"><span class="img">View</span></p>
            </li>`
            }
            listOfCards.innerHTML = cardsToDraw

        } else if (e.target.text == "Children's Cakes" || childrenCounter > 0) {
            introStr = "Our fully-customised, fun and friendly range of specialty cakes for children are guaranteed to bring a smile to the face of the birthday boy or girl"
            intro.innerHTML = introStr
            beforeCakesStr = `<a href="#">Our Range</a>  &#62; Children's Cakes`
            beforeCakes.innerHTML = beforeCakesStr
            beforeTableStr = `<a href="#">Our Range</a>  &#62; Children's Cakes`
            beforeTable.innerHTML = beforeTableStr
            tableStr = `<h4>Our Five-Step Ordering Process</h4>
            <p class="intro">Follow the five-step process to create the cake of your child's dreams. The final delicious result is limited only to by your imagination, but these are a few of our all time favourites.</p>
            <ol>
                <li><span>Choose your cake base - vanilla sponge, chocolate sponge or mud cake</span></li>
                <li><span>Choose your size</span></li>
                <li><span>Choose the colour of your icing</span></li>
                <li><span>Choose your sides - grated chocolate, nougat, flaked almonds or 100s and 1000s</span>
                </li>
                <li><span>Write your special message</span></li>
            </ol>`
            table.innerHTML = tableStr
            flag = "false"
            arr = childrenArr
            cardsToDraw = ""
            if (e.target.value >= 1) {
                var val = (e.target.value - 1) * 6
            }
            else{
                val = 0
            }
            for (let index = val; index < val + 6 && index < arr.length; index++) {
                cardsToDraw += `<li class="cardsLi">
                <img src="${arr[index].imgPath}" alt="Round mud cake"
                    class="img1" />
                <h4>${arr[index].title}</h4>
                <p>${arr[index].desc}</p>
                <p class="view"><span class="img">View</span></p>
            </li>`
            }
            listOfCards.innerHTML = cardsToDraw
        } else {
            flag = "true"
            cardsToDraw = ""
            var val = (e.target.value - 1) * 6
            for (let index = val; index < val + 6 && index < arr.length; index++) {
                cardsToDraw += `<li class="cardsLi">
                <img src="${arr[index].imgPath}" alt="Round mud cake"
                class="img1" />
                <h4>${arr[index].title}</h4>
                <p>${arr[index].desc}</p>
                <p class="view"><span class="img">View</span></p>
                </li>`
            }
            listOfCards.innerHTML = cardsToDraw
        }
    }
    change(e) {
        for (let index = 0; index < pagesButton.length; index++) {
            pagesButton[index].style.backgroundColor = "#CC3532"
        }
        e.target.style.backgroundColor = "grey"
    }
    drawPages(counter) {
        pagesToDraw += `<li><input type="button" value="${counter}" class="pagesButton"></li>`
        pagesList[0].innerHTML = pagesToDraw
        pagesButton = document.querySelectorAll(".pagesButton")
        for (let index = 0; index < pagesButton.length; index++) {
            pagesButton[index].addEventListener("click", this.change.bind(this))
            pagesButton[index].addEventListener("click", this.drawFirstPageCard.bind(this))
        }
    }
}
var CelibrationCard = new cackCards("../images/products/Round-sponge-chocolate-smarties-cake-175.jpg", "Round mud cake", "Celebrate in style with our mud cake. Our unique recipe results in a lighter density cake just right to be encased in freshly whipped cream and grated chocolate.")
var CelibrationCard2 = new cackCards("../images/products/Round-mud-cake-chocolate-173.jpg", "Round mud cake", "Celebrate in style with our mud cake. Our unique recipe results in a lighter density cake just right to be encased in freshly whipped cream and grated chocolate.")
var ChildrenCard = new cackCards("../images/products/Animal-cupcakes-pig-206.jpg", "DOLL CAKE (PINK)", "Our traditional doll cakes feature layers of frothy sponge and fresh cream, and a butter cream gown of your own design.")
var ChildrenCard2 = new cackCards("../images/products/Animal-cupcakes-lion-207.jpg", "DOLL CAKE (PINK)", "Our traditional doll cakes feature layers of frothy sponge and fresh cream, and a butter cream gown of your own design.")
for (let index = 0; index < 15; index++) {
    if (index == 0) {
        celebratonCounter = 1
        pagesToDraw = ""
    }
    if (celebrationArr.length == 0 || celebrationArr.length % 6 == 0) {
        CelibrationCard.drawPages(celebratonCounter)
        celebratonCounter++
    }
    if (index % 2 == 0) {
        celebrationArr.push(CelibrationCard)
    }
    else{
        celebrationArr.push(CelibrationCard2)
    }
}

children.addEventListener("click", function call(e) {
    celebratonCounter = 0
    childrenArr = []
    for (let index = 0; index < 3; index++) {
        if (index == 0) {
            childrenCounter = 1
            pagesToDraw = ""
        }
        if (childrenArr.length == 0 || childrenArr.length % 6 == 0) {
            ChildrenCard.drawPages(childrenCounter)
            childrenCounter++
        }
        if (index % 2 == 0) {
            childrenArr.push(ChildrenCard)
        }
        else{
            childrenArr.push(ChildrenCard2)
        }
    }
    celebration.classList.remove("active")
    children.classList.add("active")
    ChildrenCard.drawFirstPageCard(e)
})
celebration.addEventListener("click", function call(e) {
    childrenCounter = 0
    celebrationArr = []
    for (let index = 0; index < 15; index++) {
        if (index == 0) {
            celebratonCounter = 1
            pagesToDraw = ""
        }
        if (celebrationArr.length == 0 || celebrationArr.length % 6 == 0) {
            CelibrationCard.drawPages(celebratonCounter)
            celebratonCounter++
        }
        if (index % 2 == 0) {
            celebrationArr.push(CelibrationCard)
        }
        else{
            celebrationArr.push(CelibrationCard2)
        }
    }
    children.classList.remove("active")
    celebration.classList.add("active")
    CelibrationCard.drawFirstPageCard(e)
})
CelibrationCard.drawFirstPageCard()