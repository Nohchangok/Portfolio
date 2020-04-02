$("#tostringimg").click(function(){
  var cnt = 1; //버튼을 찾아가기 위해
  $("button").click(function(){
    // 이미지가 10개뿐인데 10개 다음 1로 다시 돌아오게 해줘야함.
    if($(this).text() == "다음"){
      console.log("다음이니??");
      if(cnt < 6){
        cnt++;
      }else {
        cnt = 1;
      }
    //1에서 이전을 눌렀을 경우 10 이미지를 보여주게 해줘야함.
    }else{
      console.log("이전이니??");
      if(cnt > 1){
        cnt--;
      }else{
        cnt = 6;
      }
    }
    
    //숫자에 따른 이미지로 변경.
    $("#tostringimg2").attr("src","assets/img/tostring_"+cnt+".png")
  })
})



