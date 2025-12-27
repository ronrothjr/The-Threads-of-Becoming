const mongoose = require('mongoose');

const uri = 'mongodb+srv://admin:N365sDzbEUnpY_@utopiaversefree.1rsgif7.mongodb.net/threads?retryWrites=true&w=majority';

async function checkSlides() {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');

    const TrainingModule = mongoose.model('TrainingModule', new mongoose.Schema({}, { strict: false, collection: 'trainingmodules' }));

    const modules = await TrainingModule.find({}, 'slug title').limit(10);

    console.log('\n=== Available Modules ===\n');
    modules.forEach(m => {
      console.log(`${m.slug}: ${m.title}`);
    });

    const module = await TrainingModule.findOne({}).sort({ createdAt: -1 });

    if (!module) {
      console.log('\nNo modules found');
      return;
    }

    console.log(`\n=== ${module.title} - Slides ===\n`);
    if (module.slides && module.slides.length > 0) {
      module.slides.slice(0, 5).forEach(slide => {
        console.log(`Slide ${slide.slideNumber}:`);
        console.log(`  Title: ${slide.title}`);
        console.log(`  Visual URL: ${slide.visualUrl || '(none)'}`);
        console.log('');
      });
    } else {
      console.log('No slides found');
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
  }
}

checkSlides();
