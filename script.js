document.getElementById('addButton').addEventListener('click', () => {
    const quantity = prompt('Qiyriq сет nechta zakaz qilmoqchisiz');
    if (quantity !== null && quantity !== '' && !isNaN(quantity) && Number(quantity) > 0) {
      alert(`Siz ${quantity} dona zakaz qilmoqchisiz:`);
      const total = 45000 * Number(quantity);
      alert(`Sizning zakazingizni jami narxi: ${total.toLocaleString()} so'm`);
    } else {
      alert('Raqam kirit eshshakello');
    }
  });