$("#tostringimg").click(function(){
  console.log("�̰�������?");
  var cnt = 1; //��ư�� ã�ư��� ����
  $("button").click(function(){
    cnt = Number(cnt); //���ڿ� 0�� �ٿ���⶧���� �ٽ� ���ڷ� �����������.

    // �̹����� 10�����ε� 10�� ���� 1�� �ٽ� ���ƿ��� �������.
    if($(this).text() == "����"){
      if(cnt < 6){
        cnt++;
      }else {
        cnt = 1;
      }
    //1���� ������ ������ ��� 10 �̹����� �����ְ� �������.
    }else{
      if(cnt > 1){
        cnt--;
      }else{
        cnt = 6;
      }
    }
    
    //���ڿ� ���� �̹����� ����.
    $("#tostringimg2").attr("src","assets/img/tostring_"+cnt+".jpg")
  })
})



