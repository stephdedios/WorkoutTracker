const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter Exercise Type",
        },
        name: {
          type: String,
          trim: true,
          required: "Enter Exercise Name",
        },
        duration: {
          type: Number,
          reuqired: "Enter Exercise Duration (in minutes)",
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distnce: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exercises = Workout;
