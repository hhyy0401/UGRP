var model_r = ""
$(document).ready(function () {

    $('#btn1').click(function () {

        var offset = $('#divscr').offset(); //선택한 태그의 위치를 반환

        //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 

        $('html').animate({ scrollTop: offset.top }, 400);

    });

    });

    var timer = setTimeout(function () {
    $('div.fi').fadeIn(1000);
    }, 2000);

    //var answer = localStorage.getItem("mbti_model");


    //document.write(answer);
    localStorage.clear();
    $(document).ready(function () {
    var user = $("#user_result").text();
    // var model_r = $("#model_result").text();
    model_r = $("#model_result").text();
    console.log(user)
    console.log(model_r)
    document.getElementById('accur').innerHTML = "<b style='color:  #8d3a6827;'> " + accuracy * 100 + "%</b>";
    document.getElementById('accur2').innerHTML = "<b style='color:  #8d3a6827;'> " + accuracy * 100 + "%</b>";
    var answer = model_r;
    //console.log(user);
    var output = user;

    var count = 0;

    for (i = 0; i < 4; i++) {
        if (output[i] == answer[i]) {
            count++;
        }
    }

    var accuracy = count / 4.0;

    if (accuracy == 0) {
        document.getElementById('accur').innerHTML = "<b style='color:  #8d3a6827;'> " + accuracy * 100 + "%</b>";
        document.getElementById('accur2').innerHTML = "<b style='color:  #8d3a6827;'> " + accuracy * 100 + "%</b>";
    } else if (accuracy == 0.25) {
        document.getElementById('accur').innerHTML = "<b style='color: #8d3a685e;'> " + accuracy * 100 + "%</b>";
        document.getElementById('accur2').innerHTML = "<b style='color: #8d3a685e;'> " + accuracy * 100 + "%</b>";
    } else if (accuracy == 0.5) {
        document.getElementById('accur').innerHTML = "<b style='color: #8d3a6893;'> " + accuracy * 100 + "%</b>";

        document.getElementById('accur2').innerHTML = "<b style='color: #8d3a6893;'> " + accuracy * 100 + "%</b>";
    } else if (accuracy == 0.75) {
        document.getElementById('accur').innerHTML = "<b style='color: #8d3a68c9'> " + accuracy * 100 + "%</b>";
        document.getElementById('accur2').innerHTML = "<b style='color: #8d3a68c9'> " + accuracy * 100 + "%</b>";
    } else {
        document.getElementById('accur').innerHTML = "<b style='color: #8d3a68;'> " + accuracy * 100 + "%</b>";
        document.getElementById('accur2').innerHTML = "<b style='color: #8d3a68;'> " + accuracy * 100 + "%</b>";
    }

    if (model_r=="ENFJ"){
    $("span#viewtext").text("당신은 "); 
    $("span#viewtext2").text("따뜻한 진취가");
    $("span#viewtext3").text("입니다. 인구의 대략 2%가 속하고, 국내에서는 1%로 희귀하나, 연예인 중에서는 약 10% 정도로 비교적 흔합니다. 따뜻하고, 적극적이며, 책임감이 강하고 사교성이 풍부하고 동정심이 많습니다. 또한, 호기심이 많고, 긍정적이며, 더 나은 세상을 만들기 위해 앞장서서 세상을 이끄는 것을 좋아합니다. 사회인격학의 쿼드라 그룹 모형으로는 Beta 그룹에 속하며, ISTP, ESTP, INFJ인 사람과 집단을 형성했을 때 가장 큰 심리적 편안함을 느낍니다. 가장 상극인 MBTI 유형은 ISTJ입니다. 대표적인 인물로는 강다니엘, 오프라 윈프리, 임시완 등이 있습니다.");  
    }else if (model_r=="ENFP"){
    $("span#viewtext").text("당신은 "); 
    $("span#viewtext2").text("정열적인 활동가");
    $("span#viewtext3").text("입니다. 전체 인구의 약 8.1%가 속하며, N형 중에는 가장 흔합니다. 따뜻하며, 창의적이고, 도전적이고, 상상력이 풍부하지만, 다소 충동적인 기질이 있으며 반복되는 일에 지루해 합니다. E형 중에는 다소 내향형이 강하며, 유연하고 진보적인 사고를 가졌습니다. 사회인격학 쿼드라 그룹 모형으로는 Delta 그룹에 속하고, ESTJ, ISTJ, INFP인 사람과 집단을 형성했을 때 가장 큰 심리적 편안감을 느끼는 반면, ISTP와는 상극입니다. 대표적인 인물로는 로버트 다우니주니어, 구혜선, 하지원 등이 있습니다.");  
    }else if (model_r=="ENTJ"){
    $("span#viewtext").text("당신은 "); 
    $("span#viewtext2").text("지적인 지도자");
    $("span#viewtext3").text("입니다. 전제 인구의 1.8%로 적지만, 영향력은 큽니다. 활기차서 사교성이 좋으며, 지도력과 통솔력, 거시적인 안목이 뛰어납니다. 때때로 완벽을 추구하고, 계획을 세우고 실행하는 것을 중요시하며, 사람보다 일을 중요시합니다. 사회인격학의 쿼드라 그룹 모형에 따르면 Gamma 그룹에 속하며, ESFP, ISFP, INTJ와 그룹을 형성했을 때 가장 큰 심리적 편안함을 느끼지만, ISFJ와는 상극입니다. 대표적인 인물로는 박정희 전 대통령, 소녀시대 서현, 배우 김영철 등이 있습니다");  
    }else if (model_r=="ENTP"){
    $("span#viewtext").text("당신은 "); 
    $("span#viewtext2").text("다재다능한 혁명가");
    $("span#viewtext3").text("입니다. 전체 인구의 3.2%로 적고, 국내는 2%로 더 적습니다. 박식하며, 창의성이 넘치고, 혁명가적 기질을 타고났습니다. 다재다능하고 토론을 좋아하며, 항상 다양하고 색다른 환경에서의 업무를 선호합니다. 사회인격학의 쿼드라 그룹 모형에 따르면 Alpha 그룹에 속하며, ISFJ, ESFJ, INTP인 사람과 집단을 형성했을 때 가장 큰 심리적 편안감을 느끼는 반면, ISFP와는 상극입니다. 대표적인 인물로는 버락 오바마, 유튜버 잇섭, G드래곤 등이 있습니다.");  
    }else if (model_r=="ESFJ"){
    $("span#viewtext").text("당신은 "); 
    $("span#viewtext2").text("친밀한 사교가");
    $("span#viewtext3").text("입니다. 일반적으로 인구 비율 순위에서 최상위권을 차지하는 등, MBTI 유형 중 흔한 편에 속합니다. 동정심이 많고 사회성이 풍부하며, 현실적이고, 타고난 협력자로 동료애가 많고, 친절하고 능동적입니다. 참을성이 많고 다른 사람을 잘 도와주어 간호와 의료 분야에도 적합합니다. 사회인격학의 쿼드라 그룹 모형에 따르면 Alpha 그룹에 속하며, ENTP, ISFJ, INTP와 집단을 형성했을 때 가장 큰 심리적 편안감을 느낍니다. 대표적인 인물로는 빌 클린턴, 제니퍼 로페즈, 방송인 김성주 등이 있습니다.");  
    }else if (model_r=="ESFP"){
    $("span#viewtext").text("당신은 "); 
    $("span#viewtext2").text("흥이 넘치는 연예인");
    $("span#viewtext3").text("입니다. 사교적이고, 현실적이고, 낙천적이며, 적응력이 뛰어납니다. 다소 수다스러우나 그 덕분에 공동체에서 밝은 분위기를 조성하는 역할을 합니다. 사회인격학의 쿼드라 그룹 모형에 따르면 Gamma 그룹에 속하며, ISFP, ENTJ, INTJ와 집단을 형성했을 때 가장 큰 심리적 편안감을 느끼고, INTP와는 상극입니다. 대표적인 인물로는 비욘세, 레오나르도 디카프리오, 가수 비 등이 있습니다.");  
    }else if (model_r=="ESTJ"){
    $("span#viewtext").text("당신은 "); 
    $("span#viewtext2").text("체계적인 사업가");
    $("span#viewtext3").text("입니다. MBTI 유형 중 매우 흔한 편으로, 유형별 인구 비율 순위에서 항상 4위 안에 속하며, 대한민국에서는 15%로 ISTJ 다음으로 흔합니다. 현실적, 구체적이며 일을 조직하고 계획, 추진시키는 능력이 뛰어납니다. 기계 분야나 행정 분야에 재능을 지녔으나, 속단 속결과 지나치게 업무 위주인 면도 있습니다. 사회인격학의 쿼드라 그룹 모형에 따르면 Delta 그룹에 속하며, ENFP, ISTJ, INFP와 집단을 형성했을 때 가장 큰 심리적 편안감을 느끼고 INFJ와는 상극입니다. 대표적인 인물로는 엠마 왓슨, 김태희, 백종원 등이 있습니다.");  
    }else if (model_r=="ESTP"){
    $("span#viewtext").text("당신은 "); 
    $("span#viewtext2").text("수완 좋은 모험가");
    $("span#viewtext3").text("입니다. 현실적이며 문제를 해결하는 능력이 뛰어나고, 센스가 있으며 어디서든 적응을 잘 합니다. 관대하고 개방적이어서 사물에 대한 선입견도 없는 편입니다. 오감으로 삶을 즐기는 유형이며, 연장을 다루는데 익숙한 반면 추상적인 아이디어에는 관심이 없습니다. 사회인격학의 쿼드라 그룹 모형에 따르면 Beta 그룹에 속하며, ENFJ, ISTP, INFJ인 사람들과 집단을 형성했을 때 가장 큰 심리적 편안함을 느끼며, INFP와 상극입니다. 대표적인 인물로는 마돈나, 새뮤얼 L 잭슨, 비투비 정일훈 등이 있습니다.");  
    }else if (model_r=="INFJ"){
    $("span#viewtext").text("당신은 "); 
    $("span#viewtext2").text("이상적인 평화주의자");
    $("span#viewtext3").text("입니다. ENFJ와 함께 소수의 유형으로, 전 세계 1.5%를 차지합니다. 공감능력이 뛰어나고 관찰력, 통찰력이 뛰어나 눈치가 빠른 편입니다. 인내심이 많고 배려가 습관화되어 있으며, 분쟁과 다툼을 싫어하고 내적 독립심이 강해 정신적 지도자들이 많습니다. 현실적이며 문제를 해결하는 능력이 뛰어나고, 센스가 있으며 어디서든 적응을 잘 합니다. 쿼드라 그룹 모형에 따르면 Beta 그룹에 속하며 ESTP, ENFJ, ISTP인 사람들과 집단을 형성했을 때 가장 큰 심리적 편안함을 느끼며, ESTJ와는 상극입니다. 대표적인 인물로는 모건 프리먼, 태연, 태양 등이 있습니다.");  
    }else if (model_r=="INFP"){
    $("span#viewtext").text("당신은 "); 
    $("span#viewtext2").text("낭만적인 중재자");
    $("span#viewtext3").text("입니다. 공상적, 정열적, 목가적, 낭만적입니다. 마음이 따뜻하고 조용하며 책임감이 강하고 성실합니다. 이상에 대한 정열적인 신념을 지녔으며, 경쟁이나 지배욕은 적은 편입니다. 소수나 사회적 약자의 처지를 공감하고 이해심이 뛰어나나, 지속적으로 화를 참고 넘어 가는 것이 되려 정신 건강을 해칠 수 있습니다. 쿼드라 그룹 모형에 따르면 Delta 그룹에 속해 ENFP, ESTJ, ISTJ인 사람들과 집단을 형성했을 때 가장 큰 심리적 편안함을 느끼며, ESTP와는 상극입니다. 대표적인 인물로는 아이유, 조니 뎁, 존 레논 등이 있습니다.");  
    }else if (model_r=="INTJ"){
    $("span#viewtext").text("당신은 "); 
    $("span#viewtext2").text("냉철한 전략가");
    $("span#viewtext3").text("입니다. 세계 인구의 약 2%를 차지하며, 일반적으로 2~3번째로 희귀한 유형입니다. 가장 독립심이 강하고, 냉철하며, 객관적이며, '사회적 현실'보단 '과학적 현실'을 중시합니다. 복잡한 사고 활동을 즐기며 완벽을 추구하고, 인간관계에 크게 연연하지 않습니다.  쿼드라 그룹 모형에 따르면 Gamma 그룹에 속해 ENTJ, ESFP, ISFP인 사람들과 집단을 형성했을 때 가장 큰 심리적 편안함을 느끼며, ESFJ와는 상극입니다. 대표적인 인물로는 스티븐 호킹, 제임스 카메론, 서태지 등이 있습니다.");  
    }else if (model_r=="INTP"){
    $("span#viewtext").text("당신은 "); 
    $("span#viewtext2").text("논리적인 사색가");
    $("span#viewtext3").text("입니다. 전체 인구의 약 3.3%를 차지하며, 한국인의 약 3%가 속합니다. 조용하고 과묵하며, 논리적, 분석적이어서 자연과학 등의 분야에서 능력을 발휘합니다."+
    " 혼자만의 시간을 중시하며, 내향적인 면과 지적인 면이 매우 뚜렷하게 드러나고, 자아 분석을 좋아합니다. 쿼드라 그룹 모형에 따르면 Alpha 그룹에 속해 ESFJ, ENTP, ISFJ인 사람들과 집단을 형성했을 때 가장 큰 심리적 편안함을 느끼며, ESFP와는 상극입니다. "+
    "대표적인 인물로는 정은지, BTS 진, 타일러 등이 있습니다.");  
    }else if (model_r=="ISFJ"){
    $("span#viewtext").text("당신은 "); 
    $("span#viewtext2").text("믿음직한 동반자");
    $("span#viewtext3").text("입니다. 조용하고 차분하며, 친근하고 책임감과 인내력이 강합니다. 본인이 존경하거나 좋아하는 사람에 대해서 충성심과 애정이 가득합니다. 항상 진솔하기에 인간관계를 맺기에 더없이 믿음직스러운 유형입니다. I형 중엔 가장 외향성이 강하며, 일을 협조적으로 처리합니다."+
    " 쿼드라 그룹 모형에 따르면 Alpha 그룹에 속해 ESFJ, ENTP, INTP인 사람들과 집단을 형성했을 때 가장 큰 심리적 편안함을 느끼며, ENTJ와는 상극입니다."+
    " 대표적인 인물로는 엘리자베스 2세, 앤 해서웨이, TWICE 다현 등이 있습니다.");  
    }else if (model_r=="ISFP"){
    $("span#viewtext").text("당신은 "); 
    $("span#viewtext2").text("온화한 예술가");
    $("span#viewtext3").text("입니다. 다정하고, 온화하고, 친절하고 겸손합니다. 전형적인 '착한 사람'의 이미지를 풍기는 유형이어서 우유부단한 면도 있습니다. "+
    "문학, 음악, 미술 분야에 어울리며, 사회 봉사 직종에도 어울립니다. S와 N, E와 I, J와 P 와의 균형이 모든 유형 중 가장 고릅니다. 쿼드라 그룹 모형에 따르면 Gamma 그룹에 속해 ENTJ, ESFP, INTJ인 사람들과 집단을 형성했을 때 가장 큰 심리적 편안함을 느끼며, ENTP와는 상극입니다."+
    " 대표적인 인물로 데이비드 베컴, 유재석, 양세찬 등이 있습니다.");  
    }else if (model_r=="ISTJ"){
    $("span#viewtext").text("당신은 "); 
    $("span#viewtext2").text("단정한 모범생");
    $("span#viewtext3").text("입니다. MBTI 중 흔한 유형으로 인구의 약 11.6%가 해당합니다. 단정하고, 보수적인 경향이 있으며, 인내심이 강하고 조직적, 체계적이어서 겉으로 차가워보이기도 합니다. 신중하고 책임감이 강하며, 규칙을 잘 준수하여 회사, 공공기관 근무에 어울리고 학교 선생님들이 좋아하는 유형입니다. 쿼드라 그룹 모형에 따르면 Delta 그룹에 속해 ENFP, ESTJ, INFP인 사람들과 집단을 형성했을 때 가장 큰 심리적 편안함을 느끼며, ENFJ와는 상극입니다. 대표적인 인물로 워렌 버핏, 조지 W 부시, 차태현 등이 있습니다.");  
    }else if (model_r=="ISTP"){
    $("span#viewtext").text("당신은 "); 
    $("span#viewtext2").text("재치있는 능력자");
    $("span#viewtext3").text("입니다. 과묵하며 손재주가 있는 전형적인 장인이나 기능공 스타일의 성격을 가지며, 운동에 재능이 있기도 합니다. 조용하고, 과묵하며, 도구를 다루는 능력이 뛰어나고, 객관적입니다. 현실 감각이 뛰어나 임기응변에 능하고, 고정관념이 없으나, 개인주의 성향이 있고, 타인의 일에 무관심한 편입니다. 쿼드라 그룹 모형에 따르면 Beta 그룹에 속해 ENFJ, ESTP, INFJ인 사람들과 집단을 형성했을 때 가장 큰 심리적 편안함을 느끼며, ENFP와는 상극입니다. 대표적인 인물로 김연아, 톰 크루즈, TWICE 나연 등이 있습니다.");  
    }
});
