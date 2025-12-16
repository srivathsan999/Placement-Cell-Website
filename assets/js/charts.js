// Chart.js Configuration for Statistics Page
(function() {
  let yearChart = null;
  let deptChart = null;
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCharts);
  } else {
    initCharts();
  }
  
  function getTextColor() {
    return document.documentElement.classList.contains('dark') ? '#E5E7EB' : '#0F172A';
  }
  
  function getGridColor() {
    return document.documentElement.classList.contains('dark') ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
  }
  
  function initCharts() {
    // Year-wise Placements Chart
    const yearCtx = document.getElementById('yearChart');
    if (yearCtx && typeof Chart !== 'undefined') {
      yearChart = new Chart(yearCtx, {
        type: 'bar',
        data: {
          labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
          datasets: [{
            label: 'Placements',
            data: [320, 380, 450, 520, 580, 620],
            backgroundColor: '#1E3A8A',
            borderColor: '#0EA5E9',
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: getTextColor()
              },
              grid: {
                color: getGridColor()
              }
            },
            x: {
              ticks: {
                color: getTextColor()
              },
              grid: {
                display: false
              }
            }
          }
        }
      });
    }
    
    // Department-wise Chart
    const deptCtx = document.getElementById('deptChart');
    if (deptCtx && typeof Chart !== 'undefined') {
      deptChart = new Chart(deptCtx, {
        type: 'doughnut',
        data: {
          labels: ['CSE', 'ECE', 'ME', 'CE', 'EE', 'Others'],
          datasets: [{
            data: [180, 150, 120, 80, 50, 0],
            backgroundColor: [
              '#1E3A8A',
              '#0EA5E9',
              '#334155',
              '#16A34A',
              '#3B82F6',
              '#64748B'
            ],
            borderWidth: 2,
            borderColor: document.documentElement.classList.contains('dark') ? '#1e293b' : '#F8FAFC'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                color: getTextColor(),
                padding: 15
              }
            }
          }
        }
      });
    }
    
    // Update charts when theme changes
    const observer = new MutationObserver(function() {
      if (yearChart) {
        yearChart.options.scales.y.ticks.color = getTextColor();
        yearChart.options.scales.x.ticks.color = getTextColor();
        yearChart.options.scales.y.grid.color = getGridColor();
        yearChart.update();
      }
      if (deptChart) {
        deptChart.options.plugins.legend.labels.color = getTextColor();
        deptChart.data.datasets[0].borderColor = document.documentElement.classList.contains('dark') ? '#1e293b' : '#F8FAFC';
        deptChart.update();
      }
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
  }
})();

