Vue.config.devtools = true;

Vue.component('card', {
    template: `
        <div class="card-wrap"
            @mousemove="handleMouseMove"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
            ref="card">
            <div class="card"
                :style="cardStyle">
                <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
                <div class="card-info">
                <slot name="header"></slot>
                <slot name="content"></slot>
                </div>
            </div>
        </div>`,
        mounted() {
            this.width = this.$refs.card.offsetWidth;
            this.height = this.$refs.card.offsetHeight;
        },
        props: ['dataImage'],
})