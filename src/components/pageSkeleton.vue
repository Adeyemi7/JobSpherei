<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

setTimeout(() => {
  router.push('/JobPage')
}, 3500)
</script>

<template>
  <div class="container-wrapper">
    <div class="job-listing">
      <!--Use time-->

      <UseTime />

      <!-- Search Section -->
      <div class="search-jobs">
        <input
          type="text"
          v-model="searchTerm"
          placeholder="Search for a job..."
          class="search-bar"
        />
      </div>

      <!-- Job Cards -->
      <div class="zoom">
        <div class="job-card">
          <div class="job-header">
            <!-- <img src="logo.png" alt="Company Logo" class="company-logo" /> -->
            <SwwipeLogo class="company-logo" />
            <div class="job-titles">
              <h3 class="job-company"></h3>
              <h4></h4>
            </div>
            <div class="badge-container">
              <div class="badge"></div>
              <div class="badge featured"></div>
            </div>
          </div>

          <div class="job-info">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="tags">
            <span class="tag"> </span>
            <span class="tag"> </span>
            <span class="tag"> </span>
            <span class="tag"> </span>
          </div>
          <div class="apply">
            <span class="application"> </span>
          </div>
        </div>
      </div>

      <div class="job-card">
        <div class="job-header">
          <!-- <img src="logo.png" alt="Company Logo" class="company-logo" /> -->

          <SwwipeLogo class="company-logo" />
          <div class="job-titles">
            <h3 class="job-company"></h3>
            <h4></h4>
          </div>

          <div class="badge-container">
            <div class="badge"></div>
            <div class="badge featured"></div>
          </div>
        </div>
        <div class="job-info">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="tags">
          <span class="tag"> </span>
          <span class="tag"> </span>
          <span class="tag"> </span>
          <span class="tag"> </span>
        </div>
        <div class="apply">
          <span class="application"> </span>
        </div>
      </div>

      <div class="job-card">
        <div class="job-header">
          <!-- <img src="logo.png" alt="Company Logo" class="company-logo" /> -->

          <SwwipeLogo class="company-logo" />
          <div class="job-titles">
            <h3 class="job-company"></h3>
            <h4></h4>
          </div>
          <div class="badge-container">
            <div class="badge"></div>
            <div class="badge featured"></div>
          </div>
        </div>
        <div class="job-info">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="tags">
          <span class="tag"> </span>
          <span class="tag"> </span>
          <span class="tag"> </span>
          <span class="tag"> </span>
        </div>
        <div class="apply">
          <span class="application"> </span>
        </div>
      </div>

      <div class="job-card">
        <div class="job-header">
          <!-- <img src="logo.png" alt="Company Logo" class="company-logo" /> -->

          <SwwipeLogo class="company-logo" />
          <div class="job-titles">
            <h3 class="job-company"></h3>
            <h4></h4>
          </div>
          <div class="badge-container">
            <div class="badge"></div>
            <div class="badge featured"></div>
          </div>
        </div>
        <div class="job-info">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="tags">
          <span class="tag"> </span>
          <span class="tag"> </span>
          <span class="tag"> </span>
          <span class="tag"> </span>
        </div>
        <div class="apply">
          <span class="application"> </span>
        </div>
      </div>

      <div class="job-card">
        <div class="job-header">
          <!-- <img src="logo.png" alt="Company Logo" class="company-logo" /> -->

          <SwwipeLogo class="company-logo" />
          <div class="job-titles">
            <h3 class="job-company"></h3>
            <h4></h4>
          </div>

          <div class="badge-container">
            <div class="badge"></div>
            <div class="badge featured"></div>
          </div>
        </div>
        <div class="job-info">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="tags">
          <span class="tag"> </span>
          <span class="tag"> </span>
          <span class="tag"> </span>
          <span class="tag"> </span>
        </div>
        <div class="apply">
          <span class="application"> </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Mobile-first styles */

.container-wrapper {
  background-color: hsl(180, 52%, 96%);
}

.job-listing {
  font-family: Arial, sans-serif;
  padding: 10px;
}

.search-jobs {
  position: relative;
  padding-bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

.search-bar {
  flex: 1;
  height: 40px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  position: absolute;
  top: 13px;
  left: 100px;
}

.filter-tag {
  background-color: #eef6f6;
  padding: 5px 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
}

.filter-tag:hover {
  background-color: #5ba4a4;
}

.filter-tag button {
  margin-left: 5px;
  border: none;
  background: none;
  color: #333;
  cursor: pointer;
}

.clear {
  color: #333;
  border: none;
  background-color: #fff;
}

.clear:hover {
  color: #5ba4a4;
  text-decoration: underline;
}

.job-card {
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  margin-bottom: 6rem;
}

.job-card:hover {
  border-left: 7px solid #5ba4a4;
}

.job-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1rem;
}

.company-logo {
  width: 120px;
  height: 120px;
  margin-bottom: 10px;
  position: absolute;
  z-index: 1;
  top: -60px;
  left: 30px;
}

.job-titles {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1rem;
}

.badge-container {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.badge {
  background-color: #5ba4a4;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
}

.featured {
  background-color: #2c3e50;
}

.featured:hover {
  cursor: pointer;
  background-color: hsl(180, 14%, 20%);
}

.job-info {
  margin: 10px 0;
  color: #7a8b8b;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.job-company {
  color: #5ba4a4;
}

h4:hover {
  cursor: pointer;
  color: #5ba4a4;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-bottom: 1.5rem;
}

.tag {
  background-color: #eef6f6;
  padding: 5px 10px;
  border-radius: 4px;
}

.tag:hover {
  cursor: pointer;
  background-color: #5ba4a4;
}

.apply {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.application {
  background-color: #2c3e50;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
}

.application:hover {
  background-color: #333;
}

/* Media queries for larger screens */
@media (min-width: 768px) {
  .job-header {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  h3.job-company,
  h4 {
    padding: 10px 20px;
    background-color: #eef6f6;
    border-radius: 8px;
    margin-bottom: 1rem;
    width: 200px;
  }
  .company-logo {
    margin-right: 20px;
  }

  .job-titles {
    align-items: flex-start;
  }
}

@media (min-width: 1024px) {
  .job-listing {
    max-width: 900px;
    margin: 0 auto;
  }
  .job-listing {
    max-width: 900px;
    padding: 20px;
  }

  .job-card {
    padding: 20px;
  }
}
.container-wrapper {
  animation: blinking 1.5s ease-in infinite;
}

/**key frames Animations  */

@keyframes blinking {
  0% {
    background-color: hsl(180, 52%, 96%);
    opacity: 0.8;
  }
  100% {
    background-color: hsl(180, 52%, 96%);
    opacity: 1;
  }
}

.job-card {
  animation: skeleton-loading 1.5s linear infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    background-color: #ffff;
  }
  100% {
    background-color: #cccc;
  }
}

.company-logo {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: #5ba4a4;
  animation: skeleton-loading 1.5s linear infinite alternate;
}

.badge {
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 12px;
}

.job-titles {
  margin-top: 1rem;
}

.job-company {
  color: #5ba4a4;
}

h3.job-company,
h4 {
  padding: 10px 20px;
  background-color: #eef6f6;
  border-radius: 8px;
  margin-bottom: 1rem;
  width: 200px;
}

.job-info span {
  padding: 10px 20px;
  background-color: #eef6f6;
  border-radius: 8px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 1rem;
  padding-bottom: 1.5rem;
}

.tag {
  padding: 10px 20px;
  border-radius: 8px;
  background-color: #eef6f6;
}

.apply {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.application {
  background-color: #2c3e50;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 12px;
}
</style>
