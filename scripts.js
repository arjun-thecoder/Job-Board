document.addEventListener('DOMContentLoaded', () => {
    const jobSearchForm = document.getElementById('jobSearchForm');
    const searchInput = document.getElementById('searchInput');
    const jobListings = document.getElementById('jobListings');
    const jobModal = document.getElementById('jobModal');
    const jobTitle = document.getElementById('jobTitle');
    const jobDescription = document.getElementById('jobDescription');
    const jobLocation = document.getElementById('jobLocation');
    const applyBtn = document.getElementById('applyBtn');
    const modalCloseBtn = document.getElementsByClassName('close')[0];

    // Sample job data (can be fetched from a backend)
    const jobs = [
        { title: 'Web Developer', description: 'Frontend and backend development using HTML, CSS, JavaScript, and Node.js.', location: 'Remote' },
        { title: 'UX/UI Designer', description: 'Design user interfaces and user experiences for web and mobile applications.', location: 'New York, NY' },
        { title: 'Data Analyst', description: 'Analyze and interpret data to provide insights and support decision-making processes.', location: 'San Francisco, CA' },
        { title: 'Marketing Specialist', description: 'Plan and execute marketing campaigns to promote products and services.', location: 'Chicago, IL' }
    ];

    // Function to display job listings
    function displayJobListings(jobs) {
        jobListings.innerHTML = '';
        jobs.forEach((job, index) => {
            const jobItem = document.createElement('div');
            jobItem.classList.add('job-item');
            jobItem.innerHTML = `<h3>${job.title}</h3><p>${job.location}</p>`;
            jobItem.addEventListener('click', () => openJobModal(job));
            jobListings.appendChild(jobItem);
        });
    }

    // Function to open job details modal
    function openJobModal(job) {
        jobTitle.textContent = job.title;
        jobDescription.textContent = job.description;
        jobLocation.textContent = `Location: ${job.location}`;
        jobModal.style.display = 'block';
    }

    // Close modal when close button or outside modal is clicked
    modalCloseBtn.addEventListener('click', () => jobModal.style.display = 'none');
    window.addEventListener('click', (event) => {
        if (event.target === jobModal) {
            jobModal.style.display = 'none';
        }
    });

    // Event listener for job search form submission
    jobSearchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const searchTerm = searchInput.value.toLowerCase();
        const filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(searchTerm) || job.description.toLowerCase().includes(searchTerm));
        displayJobListings(filteredJobs);
    });

    // Display all jobs initially
    displayJobListings(jobs);
});
