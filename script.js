console.clear()
var outer_data_bug=[ 
    {
      price: 190,
      meterial: "棉麻、塑膠",
      name: "蟲不來防蟲餐墊",
      img: "https://media-01.creema.net/user/1405701/exhibits/5245773/1_dd4eff1dfccd71363605b228666ddccd_583x585.jpg",
      text: "天然材質，防蟲效果極佳，經實測水果放在餐墊上一整天，完全沒有蚊蟲爬過的痕跡，而且效果能持續三年，真的很實用!",
      add: "+加入購物車",
    },
    {
      price: 120,
      meterial: "塑膠",
      name: "防蟲母片",
      img: "https://hinetcdn.waca.ec/uploads/shops/4288/products/2f/2f264e166aab98670c05ced2e8367c1d.jpg",
      text: "天然材質，防蟲效果極佳，掛在衣櫥、客廳、廚房等蚊蟲經常出現的地方，蚊蟲就漸漸消失了!真的很實用!",
      add: "+加入購物車",
    },{
      price: 250,
      meterial: "塑膠",
      name: "蟲不來防蟲桶",
      img: "http://www.keyway.com.tw/WebTools/Thumbnail.ashx?Siteid=1&Mmmid=12&fd=ProductSeries_NPics&Pname=C50301-03-%E7%B6%B2%E7%AB%99%E5%B0%81%E9%9D%A2%E6%96%B9.jpg",
      text: "天然材質，防蟲效果極佳，經實測，放在廚房一個月後，完全看不到蟑螂、螞蟻等蚊蟲了!而且效果能持續三年，真的很實用!",
      add: "+加入購物車",
    }
];

var outer_data_ion=[
  {
    price: 80,
    meterial: "銅離子、棉",
    name: "銅離子保暖襪",
    img: "https://photo.hitobp.com.tw/photo/14010011-01.jpg",
    text: "在我們日常生活中穿的襪子，加上銅離子後，就能夠抗菌抗除臭，冬天穿的話還比一般的襪子還要保暖唷~",
    add: "+加入購物車",
  },{
      price: 100,
      meterial: "銅離子、塑膠",
      name: "銅離子球",
      img: "https://media.decathlon.tw/media/catalog/product/cache/10/image/9df78eab33525d08d6e5fb8d27136e95/9/f/9f44faee-2b02-45bb-9e23-6f2163b36700_8389644.jpg",
      text: "您也有水壺、水杯長青苔、生菌的困擾嗎?一顆銅離子球放入水中，您的煩惱馬上被解決!",
      add: "+加入購物車",
  }
];

var vm=new Vue({
  el: "#app",
  data: {
    bug_control: outer_data_bug,
    ion_product: outer_data_ion,
    cart: [],
    isCartOpen: false
  },
  methods: {
    addCart(item){
      this.cart.push(item)
      console.log(item)
    },
    bgCss(url){
      return {
        'background-image': 'url('+url+')',
        'background-position': 'center center',
        'background-size': 'cover'
      }
    }
  },
  computed: {
    totalPrice(){
      return this.cart.map(item=>item.price).reduce((total,price)=>total+price,0)
    }
  },
  watch: {
    cart(){
      TweenMax.from(".fa-shopping-cart",0.3,{
        scale: 0.5
      })
    }
  }
});

$(window).scroll(
  function(evt){
    if($(window).scrollTop()>0){
      $(".navbar").removeClass("navbar-top");
      $(".navbar").addClass("navbar-light");
      $(".navbar").addClass("bg-light");
      $(".brand").css("color","black");
      $(".buycart").css("display","flex");
    }else{
      $(".navbar").addClass("navbar-top");
      $(".navbar").removeClass("navbar-light");
      $(".navbar").removeClass("bg-light");
      $(".brand").css("color","transparent");
      $(".buycart").css("display","none");
    }
  }
);

var s = skrollr.init({
  skrollrBody:'my-body' 
});

$(document).on('click','a',function(evt){
  evt.preventDefault();
  var target=$(this).attr("href");
  $('html,body').animate({
    scrollTop: $(target).offset().top
  },500)
});

var percent = 0
var timer = setInterval(function(){
  $(".bar").css("width",percent+"%")
  percent+=1
  if(percent>100){
    $(".loadingPage").addClass("complete")
    clearInterval(timer)
  }
},30)

$(".send").click(function(){
  $(".mailbody").velocity({
    scaleX: 0.1,
    scaleY: 0.1,
  }).velocity({
    opacity: 0,
    bottom: "100px"   
  },{
    delay: 500,
    complete: function(){
        $(".mailcover").html("<img class='mailink' src='https://pic.90sjimg.com/design/01/29/16/39/58bf3a161b966.png'><img>")
          .velocity({
          rotateZ: "360deg",
          scaleX: 0.2,
          scaleY: 0.2
      },{
          delay: 1000
        }).velocity({
        left: "1000px",
        opacity: 0
      },{
        delay: 300,
        complete: function(){
          alert("已送出您的資料囉~")
          $(".userName").val("")
          $(".userPhone").val("")
          $(".userMail").val("")
          $(".userText").val("")
          $(".mailbody").velocity("reverse").velocity({
              scaleX: 1,
              scaleY: 1,
              opacity: 1
          })
          $(".mailcover").html("").velocity("reverse").velocity({
              rotateZ: "170deg",
              scaleX: 1,
              scaleY: 1,
              opacity: 1
          })
        }
      })
    }
  })
})