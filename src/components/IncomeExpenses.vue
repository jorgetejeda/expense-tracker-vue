<script setup>
import { computed } from 'vue'
const props = defineProps({
    income: {
        type: Number,
        required: true
    },
    expenses: {
        type: Number,
        required: true
    }
})

const formatNumber = computed(() => {
    return props.expenses.toString().replace("-", "")
})

</script>

<template>
    <div class="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p class="money plus">+${{ income }}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p class="money minus">-${{ formatNumber }}</p>
        </div>
    </div>
</template>import { onMounted } from 'vue';onMounted,import { computed } from 'vue';
