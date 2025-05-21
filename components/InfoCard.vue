<template>
  <div class="info-card">
    <div class="accent-line"></div>
    <div class="card-content">
      <h4 class="card-title">
        <slot name="title"></slot>
      </h4>
      <p class="card-text">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoCard'
}
</script>

<style>
.info-card {
  position: relative;
  background: white;
  border-radius: 4px;
  padding: 1.5rem;
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.08),
    0 1px 2px rgba(0, 0, 0, 0.05);
  margin: 1.5rem 0;
  border-left: 1px solid #eaeaea;
  overflow: hidden;
}

.info-card .accent-line {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 6px;
  background-color: #0166b2;
}

.info-card .card-content {
  margin-left: 1rem;
}

.info-card .card-title {
  margin: 0 0 0.75rem 0;
  color: #333;
  font-size: 1.1rem;
  font-weight: 600;
}

.info-card .card-text {
  margin: 0;
  color: #555;
  line-height: 1.6;
  font-size: 0.95rem;
}
</style>
