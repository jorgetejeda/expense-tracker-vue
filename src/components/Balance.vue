<script setup>
import { computed } from 'vue'
const props = defineProps({
    total: Number,
    required: true
})
const formatNumber = computed(() => {
    return props.total.toString().replace("-", "")
})

const symbol = computed(() => {
    return props.total < 0 ? '-' : ''
})

</script>

<template>
    <h4>Your Balance</h4>
    <h1 id="balance">{{ symbol }}${{ formatNumber }}</h1>
</template>