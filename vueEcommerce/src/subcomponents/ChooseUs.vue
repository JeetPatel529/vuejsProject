<script>
export default {
    data() {
        return {
            "content": [
                {
                    "title": "Curated Selection",
                    "sub_title": "Our gallery isn't a random collection; it's a masterpiece of intentionality. Each painting you find here is the result of meticulous curation – we choose pieces that tell stories, ignite emotions, and encapsulate the beauty of human expression.",
                },
                {
                    "title": "Passion-Driven",
                    "sub_title": "[Your Shop Name] was born from the heart of [Founder's Name]. Our love for art isn't just a business endeavor; it's a testament to the profound impact that creativity can have on our lives. Every artwork we present carries the imprint of our genuine passion.",
                },
                {
                    "title": "Artistry and Diversity",
                    "sub_title": "From the bold strokes of contemporary art to the timeless elegance of traditional pieces, our collection is a vibrant tapestry of artistic styles. We believe that art should be as diverse as the emotions it evokes, ensuring that you find something that resonates with you.",
                },
                {
                    "title": "Emotions on Canvas",
                    "sub_title": "Our paintings are more than pigment on canvas – they're portals to emotions, memories, and experiences. Each stroke is infused with the artist's soul, inviting you to connect on a deeper level. Choose art that speaks to your heart.",
                },
                {
                    "title": "Customer Centric",
                    "sub_title": "Your satisfaction is our guiding star. Navigating through our website is effortless, and our secure checkout ensures your peace of mind. We're dedicated to making your art acquisition journey smooth and enjoyable, from the moment you enter our virtual doors.",
                },
                {
                    "title": "Supporting Artists",
                    "sub_title": "By choosing [Your Shop Name], you're not just acquiring art; you're supporting artists' dreams. We provide a platform for creativity to flourish, ensuring that every stroke of genius finds its rightful place in the world.",
                },
                {
                    "title": "Bringing Beauty Home",
                    "sub_title": "Transform your spaces into a symphony of aesthetics. When you select a piece from us, you're not just decorating; you're infusing your surroundings with meaning. Let the art you choose be a reflection of your personality and a testament to your appreciation for beauty.",
                }
            ]
        }
    },
}
</script>


<template>
    <div class="content" v-for="(item, index) in content" :key="index">
        <h3 class="title">{{ item.title }}</h3>
        <p class="sub-title">{{ item.sub_title }}</p>
    </div>
</template>
