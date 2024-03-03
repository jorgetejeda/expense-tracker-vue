<template>
    <h3>History</h3>
    <ul id="list" class="list">
        <li v-for="transaction in transactions" :key="transaction.id"
            :class="transaction.amount < 0 ? 'minus' : 'plus'">
            {{ transaction.text }}
            <span>${{ transaction.amount }}</span>
            <button class="delete-btn" @click="deleteTransaction(transaction.id)">x</button>
        </li>
    </ul>
</template>

<script setup>
const props = defineProps({
    transactions: Array,
    required: true
})

const emit = defineEmits(['onTransactionDeleted'])

const deleteTransaction = (id) => {
    emit('onTransactionDeleted', id)
}
</script>
