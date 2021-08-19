var products=[]
var cartItems= []
var cart_n= document.getElementById('cart_n')

var carDiv= document.getElementById('carsDIV')
var juiceDiv= document.getElementById('bikesDiv')
var vintageDiv= document.getElementById('vintageDiv')

var CAR=[
    {name:'A', price: 1},
    {name:'B', price:1},
    {name:'C', price:1},
    {name:'D', price:1},
    {name:'E', price:1}
]
var BIKE=[
    {name:'A', price: 1},
    {name:'B', price:1},
    {name:'C', price:1},
    {name:'D', price:1},
    {name:'E', price:1}
]
var VINTAGE=[
    {name:'A', price: 1},
    {name:'B', price:1},
    {name:'C', price:1},
    {name:'D', price:1},
    {name:'E', price:1}
]
function HTMLbikeProduct(con){
    let URL= `../img/bikes/bike${con}.jpeg`
    let btn= `btnBike${con}`
    return`
        <div class= "com-md-4">
            <div class="card mb-4 shadow-sm">
                <img class=card-img-top" style="height: 16rem"src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color: orange" class="fa fa-star" ></i>
                    <i style="color: orange" class="fa fa-star" ></i>    
                    <i style="color: orange" class="fa fa-star" ></i>    
                    <i style="color: orange" class="fa fa-star" ></i>    
                    <i style="color: orange" class="fa fa-star" ></i>    
                    <p class="card-text">${BIKE[con-1].name}</p>
                    <p class="card-text">Price: ${BIKE[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-itens-center">
                        <div class="btn-group">
                            <button type= "button" onclick="cart2('${BIKE[con-1].name}', '${BIKE[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary"><a 
                            style="color: inherit" href="/cart">Buy
                            </a>
                        </button>
                        <button type= "button" id="${btn}" onclick="cart('${BIKE[con-1].name}', '${BIKE[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary">Add to Cart
                        </button>
                        </div>
                        <small class="text-muted"> Free Shipping</small>
                    </div>
                </div>
            </div>
        </div>
    `
}
function HTMLcarProduct(con){
    let URL= `../img/cars/bike${con}.jpeg`
    let btn= `btnCar${con}`
    return`
        <div class= "com-md-4">
            <div class="card mb-4 shadow-sm">
                <img class=card-img-top" style="height: 16rem"src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color: orange" class="fa fa-star" ></i>
                    <i style="color: orange" class="fa fa-star" ></i>    
                    <i style="color: orange" class="fa fa-star" ></i>    
                    <i style="color: orange" class="fa fa-star" ></i>    
                    <i style="color: orange" class="fa fa-star" ></i>    
                    <p class="card-text">${CAR[con-1].name}</p>
                    <p class="card-text">Price: ${CAR[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-itens-center">
                        <div class="btn-group">
                            <button type= "button" onclick="cart2('${CAR[con-1].name}', '${CAR[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary"><a 
                            style="color: inherit" href="/cart">Buy
                            </a>
                        </button>
                        <button type= "button" id="${btn}" onclick="cart('${CAR[con-1].name}', '${CAR[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary">Add to Cart
                        </button>
                        </div>
                        <small class="text-muted"> Free Shipping</small>
                    </div>
                </div>
            </div>
        </div>
    `
}
function HTMLvintageProduct(con){
    let URL= `../img/bikes/bike${con}.jpeg`
    let btn= `btnVintage${con}`
    return`
        <div class= "com-md-4">
            <div class="card mb-4 shadow-sm">
                <img class=card-img-top" style="height: 16rem"src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color: orange" class="fa fa-star" ></i>
                    <i style="color: orange" class="fa fa-star" ></i>    
                    <i style="color: orange" class="fa fa-star" ></i>    
                    <i style="color: orange" class="fa fa-star" ></i>    
                    <i style="color: orange" class="fa fa-star" ></i>    
                    <p class="card-text">${VINTAGE[con-1].name}</p>
                    <p class="card-text">Price: ${VINTAGE[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-itens-center">
                        <div class="btn-group">
                            <button type= "button" onclick="cart2('${VINTAGE[con-1].name}', '${VINTAGE[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary"><a 
                            style="color: inherit" href="/cart">Buy
                            </a>
                        </button>
                        <button type= "button" id="${btn}" onclick="cart('${VINTAGE[con-1].name}', '${VINTAGE[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary">Add to Cart
                        </button>
                        </div>
                        <small class="text-muted"> Free Shipping</small>
                    </div>
                </div>
            </div>
        </div>
    `
}
function animation(){
    const toast=swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000
    })
    toast({
        type:'success',
        title:'Added to Shopping Cart'
    })
}
function cart(name, price, url,con,btncart){
    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item)
    let storage= JSON.parse(localStorage.getItem("cart"))
    if (storage==null){
        products.push(item)
        localStorage.setItem("cart", JSON.stringify(products))
    }else{
        products= JSON.parse(localStorage.getItem("cart"))
        products.push(item)
        localStorage.setItem("cart", JSON.stringify(products))
    }
    products= JSON.parse(localStorage.getItem("cart"))
    cart_n.innerHTML= `[${products.length}]`
    document.getElementById(btncart).style.display="none"
    animation()
}
function cart2(name,price,url,con,btncart){
    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item)
    let storage= JSON.parse(localStorage.getItem("cart"))
    if (storage==null){
        products.push(item)
        localStorage.setItem("cart", JSON.stringify(products))
    }else{
        products= JSON.parse(localStorage.getItem("cart"))
        products.push(item)
        localStorage.setItem("cart", JSON.stringify(products))
    }
    products= JSON.parse(localStorage.getItem("cart"))
    cart_n.innerHTML= `[${products.length}]`
    document.getElementById(btncart).style.display="none"
}

(()=>{
    for(let index=1; index<=6; index++){
        bikeDIV.innerHTML += `${HTMLbikeProduct(index)}`
    }
    for(let index=1; index<=3; index++){
        carDIV.innerHTML += `${HTMLcarProduct(index)}`
        vintageDIV.innerHTML += `${HTMLvintageProduct(index)}`
    }
    if(localStorage.getItem("cart")==null){

    }else{
        products= JSON.parse(localStorage.getItem("cart"))
        cart_n.innerHTML= `[${products.length}]`
    }
    
})();
