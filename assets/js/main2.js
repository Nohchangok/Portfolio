$("#tostringimg").click(function(){
  var cnt = 1; //��ư�� ã�ư��� ����
  $("button").click(function(){
    // �̹����� 10�����ε� 10�� ���� 1�� �ٽ� ���ƿ��� �������.
    if($(this).text() == "����"){
      console.log("�����̴�??");
      if(cnt < 6){
        cnt++;
      }else {
        cnt = 1;
      }
    //1���� ������ ������ ��� 10 �̹����� �����ְ� �������.
    }else{
      console.log("�����̴�??");
      if(cnt > 1){
        cnt--;
      }else{
        cnt = 6;
      }
    }
    
    //���ڿ� ���� �̹����� ����.
    $("#tostringimg2").attr("src","assets/img/tostring_"+cnt+".png")
  })
})



