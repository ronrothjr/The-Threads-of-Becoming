const fetch = require('node-fetch');

async function addWritingPrompts() {
  try {
    // Get auth token
    const loginResponse = await fetch('http://localhost:5050/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'ronwr@pm.me',
        password: 'password123'
      })
    });
    
    const { token } = await loginResponse.json();
    console.log('Authenticated');
    
    // Get current module
    const moduleResponse = await fetch('http://localhost:5050/api/admin/training/modules', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    
    const modules = await moduleResponse.json();
    const pauseModule = modules.find(m => m.title === 'PAUSE Foundation');
    
    if (!pauseModule) {
      console.log('PAUSE Foundation module not found');
      return;
    }
    
    console.log('Found module:', pauseModule.title);
    console.log('Current writing prompts:', pauseModule.writingPrompts?.length || 0);
    
    // Add writing prompts
    const writingPrompts = [
      {
        prompt: 'Where did I notice the tension between pausing and reacting today?',
        type: 'reflection',
        suggestedDuration: 5,
        guidance: 'Think about specific moments today when you felt pulled to react immediately. What was happening? What did you do?'
      },
      {
        prompt: 'Which pole do I usually collapse toward—rushing to react or avoiding/freezing?',
        type: 'exploration',
        suggestedDuration: 7,
        guidance: 'Reflect on your typical patterns. Do you tend to jump into action without thinking, or do you tend to shut down and avoid? Are there specific situations where you do one or the other?'
      },
      {
        prompt: 'Describe a recent situation where I paused before responding. What made that possible?',
        type: 'application',
        suggestedDuration: 5,
        guidance: 'Recall a specific moment when you successfully created space between stimulus and response. What conditions helped you pause? What did you notice?'
      },
      {
        prompt: 'What am I learning about my relationship with reactivity and pause?',
        type: 'integration',
        suggestedDuration: 10,
        guidance: 'Looking back over your practice this week, what patterns are emerging? What are you discovering about yourself? What questions are arising?'
      }
    ];
    
    pauseModule.writingPrompts = writingPrompts;
    
    // Save via API
    const saveResponse = await fetch('http://localhost:5050/api/admin/training/modules', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pauseModule)
    });
    
    if (saveResponse.ok) {
      const saved = await saveResponse.json();
      console.log('✓ Saved successfully');
      console.log('Writing prompts count:', saved.writingPrompts?.length || 0);
    } else {
      const error = await saveResponse.json();
      console.error('Save failed:', error);
    }
    
  } catch (error) {
    console.error('Error:', error);
  }
}

addWritingPrompts();
