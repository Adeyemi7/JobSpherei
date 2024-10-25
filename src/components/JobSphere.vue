<script setup>
import PhotoSnap from './icons/PhotoSnap.vue'
import { ref, computed } from 'vue'

// Sample filters and job data
const filters = ref(['JavaScript'])
const searchTerm = ref('') // Add search term

const jobs = ref([
  {
    company: 'Photosnap',
    position: 'Senior Frontend Developer',
    posted: '1d ago',
    type: 'Full Time',
    location: 'USA Only',
    tags: ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript'],
    featured: true,
    new: true,
    apply: true,
    closed: false,
  },
  {
    company: 'Manage',
    position: 'Fullstack Developer',
    posted: '1d ago',
    type: 'Part Time',
    location: 'Remote',
    tags: ['Fullstack', 'Midweight', 'Python', 'React'],
    featured: true,
    new: true,
    apply: true,
    closed: false,
  },
  {
    company: 'Account',
    position: 'Junior Frontend Developer',
    posted: '2d ago',
    type: 'Part Time',
    location: 'USA Only',
    tags: ['Frontend', 'Junior', 'JavaScript', 'React', 'Sass'],
    featured: false,
    new: true,
    apply: false,
    closed: true,
  },
  {
    company: 'MyHome',
    position: 'Junior Frontend Developer',
    posted: '5d ago',
    type: 'Contract',
    location: 'USA Only',
    tags: ['Frontend', 'Junior', 'CSS', 'JavaScript'],
    featured: true,
    new: false,
    apply: true,
    closed: false,
  },
  {
    company: 'Loop Studios',
    position: 'Software Engineer',
    posted: '1w ago',
    type: 'Full Time',
    location: 'Worldwide',
    tags: ['Fullstack', 'Midweight', 'JavaScript', 'Ruby', 'Sass'],
    featured: false,
    new: false,
    apply: false,
    closed: true,
  },
  {
    company: 'FaceIt',
    position: 'Junior Backend Developer',
    posted: '2w ago',
    type: 'Full Time',
    location: 'UK Only',
    tags: ['Backend', 'Junior', 'Ruby', 'RoR'],
    featured: true,
    new: false,
    apply: false,
    closed: true,
  },
  {
    company: 'Shortly',
    position: 'Junior Developer',
    posted: '2w ago',
    type: 'Full Time',
    location: 'Worldwide',
    tags: ['Frontend', 'Junior', 'HTML', 'JavaScript', 'Sass'],
    featured: false,
    new: false,
    apply: false,
    closed: true,
  },
  {
    company: 'Insure',
    position: 'Junior Frontend Developer',
    posted: '2w ago',
    type: 'Full Time',
    location: 'USA Only',
    tags: ['Frontend', 'Junior', 'JavaScript', 'Vue', 'Sass'],
    featured: true,
    new: false,
    apply: true,
    closed: false,
  },
  {
    company: 'Eyecam Co.',
    position: 'Full Stack Engineer',
    posted: '3w ago',
    type: 'Full Time',
    location: 'Worldwide',
    tags: ['Fullstack', 'Midweight', 'JavaScript', 'Python', 'Django'],
    featured: true,
    new: false,
    apply: false,
    closed: true,
  },
  {
    company: 'The Air Filter Company',
    position: 'Front-end Dev',
    posted: '1mo ago',
    type: 'Part Time',
    location: 'Worldwide',
    tags: ['Frontend', 'Junior', 'JavaScript', 'React', 'Sass'],
    featured: false,
    new: false,
    apply: true,
    closed: false,
  },
])

console.log('jobs')
// Computed property to filter jobs based on selected filters and search term
const filteredJobs = computed(() => {
  return jobs.value.filter(job => {
    const matchesSearchTerm = job.position
      .toLowerCase()
      .includes(searchTerm.value.toLowerCase())
    const matchesFilters = filters.value.every(filter =>
      job.tags.includes(filter),
    )
    return matchesSearchTerm && matchesFilters
  })
})

// Methods to manipulate filters
const removeFilter = filter => {
  filters.value = filters.value.filter(f => f !== filter)
}

const clearFilters = () => {
  filters.value = []
}

console.log('jobs')
</script>

<template>
  <div class="container-wrapper">
    <!--Background image-->
    <div class="img-container">
      <img
        srcset="@/assets/bg-header-desktop.svg 156w"
        sizes="(max-width: 768px)"
        src="@/assets/bg-header-mobile.svg"
      />
    </div>
    <div class="job-listing">
      <!-- Search Section -->
      <div class="search-jobs">
        <input
          type="text"
          v-model="searchTerm"
          placeholder="Search for a job..."
          class="search-bar"
        />

        <!-- Filters Section -->
        <div class="filters" v-if="filters.length">
          <span v-for="filter in filters" :key="filter" class="filter-tag">
            {{ filter }}
            <button @click="removeFilter(filter)">X</button>
          </span>
          <button class="clear" @click="clearFilters">Clear</button>
        </div>
      </div>

      <!-- Job Cards -->
      <div class="job-card" v-for="job in filteredJobs" :key="job.position">
        <div class="job-header">
          <PhotoSnap class="company-logo" />

          <div class="job-titles">
            <h3 class="job-company">{{ job.company }}</h3>
            <h4>{{ job.position }}</h4>
          </div>
          <div class="badge-container">
            <div v-if="job.new" class="badge">NEW!</div>
            <div v-if="job.featured" class="badge featured">FEATURED</div>
          </div>
        </div>
        <div class="job-info">
          <span>{{ job.posted }}</span>
          <span>{{ job.type }}</span>
          <span>{{ job.location }}</span>
        </div>
        <div class="tags">
          <span v-for="tag in job.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <div class="apply">
          <span v-if="job.apply" :key="apply" class="application"> APPLY </span>
          <span v-if="job.closed" :key="closed" class="application">
            CLOSED
          </span>
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

.img-container {
  background-color: #5ba4a4;
}

.job-listing {
  font-family: Arial, sans-serif;
  padding: 10px;
}

.search-jobs {
  margin-top: -2rem;
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

  .company-logo {
    margin-right: 20px;
  }

  .job-titles {
    align-items: flex-start;
  }

  .badge-container {
    display: flex;
    gap: 4rem;
    margin-top: 1rem;
  }
}

@media (min-width: 1024px) {
  .job-listing {
    max-width: 900px;
    margin: 0 auto;
  }

  .job-card {
    padding: 20px;
  }
}
</style>
