<template>

    <!-- this part does not exist in project but it was in design pattern -->
    <div class="SidePage__Body"> 

        <div class="SidePage__SectionTop">
            <div class="SidePage__SectionTopLeft">

            <div><h1>دسته بندی ها </h1></div>
            <Navbar/>
        </div>

        <div class="SidePage__SectionTopRigth" style="font-size: large;">
            
            <div class="SidePage__Content">
                <h2>
                    این طرز تهیه خورش قیمه را هیچ‌جا ندیده‌اید!
                </h2>
                <p> زنگ در خانه را می‌زنند. برایتان خورش قیمه نذری آورده‌اند. چه عطری! چه رنگی! چه طعمی! ولی حیف که خیلی کم است و در چشم‌ به‌ هم‌زدنی تمام می‌شود. شما شاهد آن هستید که چطور قیمه به آن خوشمزگی از گلوی اعضای خانواده پایین می‌رود و به شما فقط در حد یک یا دو قاشق قیمه می‌رسد؛ شما هنوز هم دلتان از آن قیمه نذری می‌خواهد! خوب ایرادی ندارد. خودتان دست‌به‌کار شوید و یک خورشت قیمه خوشمزه درست کنید. ما در این مقاله شما را با طرز تهیه خورش قیمه آشنا می‌کنیم و در ادامه از فوت‌وفن‌های آن صحبت خواهیم کرد</p>
                <h2>طرز تهیه خورش قیمه خوشمزه</h2>
                <div class="SidePage__Pic">
                    <img src="@/assets/img/Gheyme.jpg" alt="food pic" style="border-radius: 10px;">
                </div>
            </div>
        </div>
        </div>
        
        
        <div class="SidePage__SectionDown" style="direction: rtl;">
            <div class="SidePage__Text" style="width: 60%;">
                <h2>مواد لازم خورش قیمه</h2>
                <ul>
                    <li>1/2 لیوان لپه</li>
                    <li>2 عدد پیاز</li>
                    <li>300 گرم گوشند گوسفد</li>
                    <li>3 قاشق غذاخوری رب </li>
                    <li>5لیوان ای </li>
                    <li>2 عدد چوپ دارچین </li>
                    <li>2 عدد لیمو امانی </li>
                    <li>2 قاشق چای خوری زعفران دم کرده</li>
                    <li>1  گلاب قاشق غداخوری </li>
                    <li>سیب زمینی سرخ کرده </li>
                </ul>
                <h2>طرز تهیه خورش قیمه</h2>
                <p> از حدود ۱۲ ساعت قبل، لپه‌ها را خیس کنید. گوشت‌ها را به‌صورت مکعبی خرد کنید. پیازها را برش بزنید و در کمی روغن تفت دهید. بعد از نیم‌پزشدن پیازها، گوشت را به آن اضافه کنید. کمی فلفل بزنید. لپه‌ها را اضافه کنید و تفت دهید. ۵ لیوان آب را به همراه چوب دارچین اضافه کنید. در قابلمه را بگذارید. مواد به حداقل ۲ ساعت زمان برای پخت نیاز دارند. بعد از آن که گوشت و لپه‌ها پختند، رب گوجه را تفت دهید. رب گوجه، نمک و لیمو‌عمانی را به خورشت قیمه اضافه کنید. حدود ۴۵ دقیقه بعد که لیمو‌ها نرم شدند، گلاب و زعفران را بیفزایید. کمی از خورشت قیمه را بچشید؛ اگر ترش نبود، مقداری آبلیمو اضافه کنید. خورشت قیمه شما در پانزده دقیقه دیگر باید آماده شده باشد. </p>
                <p> زمان پخت و آماده‌سازی این غذا در حدود ۳ ساعت و ۱۵ دقیقه است و برای پذیرایی از ۳ نفر کافی‌ست. البته اگر می‌خواهید دلی از عزا دربیاورید، آن را تنهایی بخورید و انتقام آن خورش قیمه نذری را بگیرید! راستی سیب‌زمینی‌های سرخ‌کرده را فراموش نکنید. آن‌ها را روی خورش قیمه بریزید و از طعم آن لذت ببرید. </p>
                <h2>ویدیو طرز تهیه خورش قیمه</h2>
                <video  width="1080" height="480" controls style="background:black;">
                <source src="@/assets/movie/Gheyme.mp4" type="video/mp4">
                Your browser does not support HTML video.
                </video>
            </div>
            
        </div>
        
        
    </div>

</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
    components : {
    Navbar
  } 
}
</script>

<style>
@import "@/assets/StyleSheets/SidePage.css";
@import "@/assets/StyleSheetsComponent/importComponent.css";
</style>

