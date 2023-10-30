<template>
  <MainLayout> </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();

let selectedArray = ref([]);

onMounted(() => {
  setTimeout(() => (userStore.isLoading = false), 200);
});

const cards = ref(['visa.png', 'mastercard.png', 'paypal.png', 'applepay.png']);

const totalPriceComputed = computed(() => {
  let price = 0;
  userStore.cart.forEach((prod) => {
    price += prod.price;
  });
  return price / 100;
});

const selectedRadioFunc = (e) => {
  if (!selectedArray.value.length) {
    selectedArray.value.push(e);
    return;
  }
  selectedArray.value.forEach((item, index) => {
    if (e.id != item.id) {
      selectedArray.value.push(e);
    } else {
      selectedArray.value.splice(index, 1);
    }
  });
};

const goToCheckout = () => {
  let ids = [];
  userStore.checkout = [];

  selectedArray.value.forEach((item) => ids.push(item.id));

  let res = userStore.cart.filter((item) => {
    return ids.indexOf(item.id) != -1;
  });

  res.forEach((item) => userStore.checkout.push(toRaw(item)));

  return navigateTo('/checkout');
};

const products = [
  {
    id: 1,
    title: 'Title 1',
    description: 'This is a description',
    url: 'https://picsum.photos/id/7/800/800',
    price: 9999,
  },
  {
    id: 2,
    title: 'Title 2',
    description: 'This is a description',
    url: 'https://picsum.photos/id/71/800/800',
    price: 9999,
  },
];
</script>
