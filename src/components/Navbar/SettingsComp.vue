<template>
  <a onclick="my_modal_5.showModal()">
    <!-- Sadece fotoğrafı göstermek için -->
    <img src="https://img.icons8.com/?size=64&id=xw5lW7WjTBeQ&format=png" alt="Open Modal" class="cursor-pointer">
  </a>
  <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box text-black">
      <h3 class="font-bold text-lg text-center">Settings</h3>
      <div class="form-control">
  <label class="label cursor-pointer">
    <span class="label-text">Auto Scroll</span> 
    <input type="checkbox" class="checkbox" />
  </label>
</div>
<div class="form-control">
  <label class="label cursor-pointer">
    <span class="label-text">Loop</span> 
    <input type="checkbox" class="checkbox" />
  </label>
</div>
      <div class="modal-action">
        <form method="dialog">
          <!-- If there is a button in form, it will close the modal -->
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script>
export default {

}
</script>

<style>

</style>






