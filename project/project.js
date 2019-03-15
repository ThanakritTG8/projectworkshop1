$(function () {

    $('#button').click(function () {

        // var select = $('#sex').value();

        

        var job = []
        job[0] = "นายก" + '<br>';
        job[1] = "มือวางระเบิด" + '<br>';
        job[2] = "เจ้าหน้าที่จับหมวก" + '<br>';
        job[3] = "รับจ้างประท้วง" + '<br>';
        job[4] = "วีรบุรุษนักซิ่ง" + '<br>';
        job[5] = "พนักงานเขียนใบสั่ง" + '<br>';
        job[6] = "พนักงานทดสอบกัญชา" + '<br>';
        job[7] = "เจ้าหน้าที่สื่อสารกับเทพเจ้า" + '<br>';
        job[8] = "พนักงานผลิตของศักดิ์สิทธิ์" + '<br>';
        job[9] = "นักวิ่งมือไว" + '<br>';

        var pic = []
        pic[0] = '<br><br><img src="https://pbs.twimg.com/media/Cv2dvVpUIAALphd.jpg" alt=""></img><br><br><br>';
        pic[1] = '<br><br><img src="https://www.clipmass.com/upload/picture/full/400/34365f7dc3e3472557106da55bcdbe3e.jpg" alt=""></img><br><br><br>';
        pic[2] = '<br><br><img src="http://upic.me/i/4d/526432_227501357391163_955541661_n.jpg" alt=""></img><br><br><br>';
        pic[3] = '<br><br><img src="https://upic.me/i/iz/og702.jpg" alt=""></img>';
        pic[4] = '<br><br><img src="http://www.parttimecandy.com/wp-content/uploads/2018/04/%E0%B8%87%E0%B8%B2%E0%B8%99-Part-Time-Extra-%E0%B8%9A%E0%B8%97%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81%E0%B9%81%E0%B8%A7%E0%B9%89%E0%B8%99-%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%A1%E0%B8%B5%E0%B8%A1%E0%B8%AD%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%84%E0%B8%8B%E0%B8%84%E0%B9%8C-%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%95%E0%B8%B1%E0%B8%A7-2700-%E0%B8%9A%E0%B8%B2%E0%B8%97-%E0%B8%96%E0%B8%B6%E0%B8%87%E0%B8%A1%E0%B8%B7%E0%B8%AD.jpg"; alt=""></img><br><br><br>';
        pic[5] = '<br><br><img src="https://f.ptcdn.info/422/018/000/1398928215-2014031700-o.jpg" alt=""></img><br><br><br>';
        pic[6] = '<br><br><img src="https://f.ptcdn.info/459/023/000/1410785630-1370248951-o.png" alt=""></img><br><br><br>';
        pic[7] = '<br><br><img src="http://www.mamao.in.th/wp-content/uploads/2018/05/4-9.jpg" alt=""></img><br><br><br>';
        pic[8] = '<br><br><img src="https://horoscope.mthai.com/app/uploads/2015/05/1654423_345450268996404_4076259581435199527_n.jpg" alt=""></img><br><br><br>';
        pic[9] = '<br><br><img src="https://image.shutterstock.com/image-vector/woman-whose-bag-stolen-260nw-634285475.jpg" alt=""></img><br><br><br>';


        

        var randomjob = Math.floor(Math.random() * (job.length) && Math.random() * (pic.length));

        // if(select=="s"){

        //     alert("เลือกก่อน!");

    // }else if(select=="f" || select=="f" || select=="mn"){

        document.getElementById('result').innerHTML = job[randomjob] + pic[randomjob];
        

       // }

    });
})

