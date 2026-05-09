// Shared JavaScript for CitizenPulse

function shareToX(text) {
  const encodedText = encodeURIComponent(text);
  window.open(`https://twitter.com/intent/tweet?text=${encodedText}`, '_blank');
}

function showDeepDive(topicId) {
  // Future: Load full deep dive
  alert(`Opening deep dive for: ${topicId}\n\n(Plus Plan feature)`);
}

// Example: Render topics dynamically (can be used across pages)
async function loadTopics() {
  try {
    const response = await fetch('../data/topics.json');
    const data = await response.json();
    console.log('Topics loaded:', data.topics);
    return data.topics;
  } catch (error) {
    console.error('Failed to load topics:', error);
    return [];
  }
}

// Utility: Format large numbers
function formatNumber(num) {
  return num.toLocaleString('en-US');
}
