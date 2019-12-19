<template>
  <div
    class="navbar w-full ml-auto mr-auto flex items-center justify-between absolute top-0"
  >
    <div class="navbar-left">
      <span
        class="navbar-brand font-poppins font-bold text-white-primary capitalize"
      >
        Hector Vasquez
      </span>
    </div>
    <div class="navbar-right">
      <ul class="flex items-center font-nunito font-normal capitalize">
        <li class="cursor-pointer text-white-primary">
          Services
        </li>
        <li class="cursor-pointer text-white-primary">
          Skills
        </li>
        <li class="cursor-pointer text-white-primary">
          Projects
        </li>
        <li class="cursor-pointer text-white-primary">
          Reviews
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>

<style lang="css">
.navbar {
  max-width: 1230px;
  margin-top: 30px;
  z-index: 99;
  padding-left: 30px;
  padding-right: 30px;
}
.navbar .navbar-left .navbar-brand {
  font-size: 28px;
  line-height: 27px;
}
.navbar .navbar-right ul li:not(:last-child) {
  margin-right: 40px;
}
</style>
