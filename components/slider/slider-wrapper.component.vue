<template>
    <div class="wrapper">
        <div class="slider">
            <SliderContentComponent
                    v-for="slide of slides"
                    :content="slide.content"
                    :subtitle="slide.subtitle"
                    :title="slide.title"
            >
                <template v-slot:card-content>
                    <slot name="card-content"></slot>
                </template>
            </SliderContentComponent>
        </div>
        <img :src="imageUrl" class="background img-clip"/>
    </div>
</template>

<script>
export default {
    name: "SliderWrapperComponent",
    props: {
        slides: {
            type: Array,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

hr {
    background: white;
    width: 75%;
    margin: 1rem 0;
}

.wrapper {
    position: relative;
    background: $primary;
    z-index: 2;
}

.img-clip {
    clip-path: polygon(0 0, 100% 0, 100% 40%, 44% 85%, 0 85%, 0% 65%);
}


.background {
    z-index: -1;
    object-fit: cover;
    width: 100%;
    min-height: 100vh;
}

.slider {
    scroll-snap-type: x mandatory;
    display: flex;
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
    position: absolute;
    z-index: 200;
    min-height: 100%;
    width: 100%;
}

section {
    min-width: 100%;
    min-height: 100vh;
    scroll-snap-align: start;
    text-align: center;
    position: relative;
}

.text {
    &__has-shadow {
        text-shadow: 0.15rem 0.15rem 0.25rem rgba(0, 0, 0, 0.75);
    }
}
</style>