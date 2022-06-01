const scrollHeightAnimation = (selector) => {
    function onEntry(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
           change.target.classList.add('animate__animated', 'animate__fast', 'animate__fadeInUp');
          }
        });
      }
      
    let options = {
        threshold: [0.5] 
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll(selector);
    
    for (let elm of elements) {
        observer.observe(elm);
    }
}

export default scrollHeightAnimation;