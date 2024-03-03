

<template>
    <h3>Add new transaction</h3>
    <form @submit.prevent="onSubmit">
        <div class="form-control">
            <label for="text">Text</label>
            <input type="text" id="text" placeholder="Enter text..." v-model="formData.text" />
        </div>
        <div class="form-control">
            <label for="amount">Amount <br />
                (negative - expense, positive - income)</label>
            <input type="text" id="amount" placeholder="Enter amount..." v-model="formData.amount" />
        </div>
        <button class="btn">Add transaction</button>
    </form>
</template>

<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()
const emit = defineEmits(['onTransactionSubmitted'])

const formData = ref({
    text: '',
    amount: 0
})

const resetForm = () => {
    formData.value.text = ''
    formData.value.amount = 0
}

const onSubmit = () => {
    if(!formData.value.text || !formData.value.amount){
        toast.error('Please add a text and amount')
        return
    }

    emit('onTransactionSubmitted', formData.value)
    resetForm()
}
</script>