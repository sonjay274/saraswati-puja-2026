document.getElementById('receiptForm').addEventListener('submit', function(e){
      e.preventDefault();
      document.getElementById('outNo').textContent = document.getElementById('receiptNo').value;
      document.getElementById('outName').textContent = document.getElementById('donorName').value;
      document.getElementById('outAmount').textContent = document.getElementById('amount').value;
      document.getElementById('outPurpose').textContent = document.getElementById('purpose').value;
      document.getElementById('generatedReceipt').style.display = 'block';
      window.scrollTo({ top: document.getElementById('generatedReceipt').offsetTop, behavior: 'smooth' });
    });

    document.getElementById('printBtn').addEventListener('click', function(){
      window.print();
    });