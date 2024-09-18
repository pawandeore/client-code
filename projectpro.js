(function(window, document) {
  var YourWidget = {
    init: function(config) {
      // Store the config options (e.g., key, options)
      this.config = config;

      // Create a container for the widget
      var widgetContainer = document.createElement('div');
      widgetContainer.id = 'your-widget-container';
      widgetContainer.style.position = 'fixed';
      widgetContainer.style.bottom = '20px';
      widgetContainer.style.right = '20px';
      widgetContainer.style.width = '300px';
      widgetContainer.style.height = '400px';
      widgetContainer.style.backgroundColor = '#f1f1f1';
      widgetContainer.style.border = '1px solid #ddd';
      widgetContainer.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
      widgetContainer.style.zIndex = '1000';

      // Add your widget content (e.g., iframe, text, buttons, etc.)
      var widgetContent = document.createElement('div');
      widgetContent.innerHTML = `
        <h3>Your Widget</h3>
        <p>Welcome to the widget!</p>
        <button id="close-widget" style="background-color: #ff5e5e; color: white; border: none; padding: 5px 10px; cursor: pointer;">Close</button>
      `;

      widgetContainer.appendChild(widgetContent);
      document.body.appendChild(widgetContainer);

      // Close button functionality
      document.getElementById('close-widget').addEventListener('click', function() {
        widgetContainer.style.display = 'none';
      });

      console.log('Widget initialized with config:', config);
    }
  };

  // Expose the widget globally
  window.YourWidget = YourWidget;

})(window, document);
