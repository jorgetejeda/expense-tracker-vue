<template>
  <Header />
  <div class="container">
    <Balance :total="+total" />
    <IncomeExpenses :income="+income" :expenses="+expense" />
    <TransactionList :transactions="transactions" @onTransactionDeleted="handleTransactionDeleted" />
    <AddTransaction @onTransactionSubmitted="handleTransactionSubmitted"/>
  </div>
</template>

<script setup>
import Header from '@components/Header.vue'
import Balance from '@components/Balance.vue'
import IncomeExpenses from '@components/IncomeExpenses.vue'
import TransactionList from '@components/TransactionList.vue'
import AddTransaction from '@components/AddTransaction.vue'

import { reactive, computed, onMounted } from 'vue'

const transactions = reactive([])

onMounted(()=>{
  const savedTransactions = JSON.parse(localStorage.getItem('transactions'))
  if(savedTransactions){
    transactions.push(...savedTransactions)
  }
})

const total = computed(()=>{
  return transactions.reduce((acc, item) => (acc += item.amount), 0).toFixed(2)
})

const income = computed(() => {
  return transactions
    .filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0)
    .toFixed(2)
})

const expense = computed(() => {
  return transactions
    .filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0)
    .toFixed(2)
})

const handleTransactionSubmitted = (transaction) => {
  transactions.push({
    id: generateId(),
    text: transaction.text,
    amount: +transaction.amount
  })
  localStorage.setItem('transactions', JSON.stringify(transactions))
}

const generateId = () => {
  return Math.floor(Math.random() * 100000000)
}

const handleTransactionDeleted = (id) => {
  const removeTransaction = transactions.findIndex(transaction => transaction.id === id)
  transactions.splice(removeTransaction, 1)
  localStorage.setItem('transactions', JSON.stringify(transactions))
}

</script>
