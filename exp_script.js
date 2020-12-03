var enter_full = {
  type: 'fullscreen',
  fullscreen_mode: true
};
var exit_full = {
  type: 'fullscreen',
  fullscreen_mode: false
};

// Give consent
var check_consent = function(elem) {
  if (document.getElementById('consent_checkbox').checked) {
    return true;
  }
  else {
    alert("If you wish to participate, you must check the box next to the statement 'I agree to participate in this study.'");
    return false;
  }
  return false;
};

var consent = {
  type: 'external-html',
  url: 'content/consent.html',
  cont_fn: check_consent,
  cont_btn: 'start',
};

var instr_1 = {
  type: 'external-html',
  url: 'content/instr_1.html',
  cont_btn: 'next',
};


var iti_200 = {
  type: "image-keyboard-response",
  stimulus: 'img/Stim/fixation_b.png',
  choices: jsPsych.NO_KEYS,
  trial_duration: 200,
  //data: {test_part: 'iti'}
}

var iti_1000 = {
  type: "image-keyboard-response",
  stimulus: 'img/Stim/fixation_b.png',
  choices: jsPsych.NO_KEYS,
  trial_duration: 1000,
  //data: {test_part: 'iti'}
}

/* define learning trials */
var lr_stimuli_TS1 = [ //TS1 based on frequency; high a low l
  { lr_stimulus: "img/Stim/TS000.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Color: 'green', correct_response: 'x'}},
  { lr_stimulus: "img/Stim/TS001.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Color: 'green', correct_response: 'x'}},
  { lr_stimulus: "img/Stim/TS002.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Color: 'green', correct_response: 'x'}},
  { lr_stimulus: "img/Stim/TS003.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Color: 'green', correct_response: 'x'}},
  { lr_stimulus: "img/Stim/TS010.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Color: 'green', correct_response: 'x'}},
  { lr_stimulus: "img/Stim/TS011.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Color: 'green', correct_response: 'x'}},
  { lr_stimulus: "img/Stim/TS012.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Color: 'green', correct_response: 'x'}},
  { lr_stimulus: "img/Stim/TS013.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Color: 'green', correct_response: 'x'}},
  { lr_stimulus: "img/Stim/TS020.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Color: 'green', correct_response: 'm'}},
  { lr_stimulus: "img/Stim/TS021.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Color: 'green', correct_response: 'm'}},
  { lr_stimulus: "img/Stim/TS022.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Color: 'green', correct_response: 'm'}},
  { lr_stimulus: "img/Stim/TS023.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Color: 'green', correct_response: 'm'}},
  { lr_stimulus: "img/Stim/TS030.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Color: 'green', correct_response: 'm'}},
  { lr_stimulus: "img/Stim/TS031.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Color: 'green', correct_response: 'm'}},
  { lr_stimulus: "img/Stim/TS032.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Color: 'green', correct_response: 'm'}},
  { lr_stimulus: "img/Stim/TS033.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Color: 'green', correct_response: 'm'}},
];
var lr_stimuli_TS2 = [ //TS2 based on orientation; right a left l
  { lr_stimulus: "img/Stim/TS100.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Color: 'blue', correct_response: 'x'}},
  { lr_stimulus: "img/Stim/TS101.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Color: 'blue', correct_response: 'x'}},
  { lr_stimulus: "img/Stim/TS102.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Color: 'blue', correct_response: 'm'}},
  { lr_stimulus: "img/Stim/TS103.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Color: 'blue', correct_response: 'm'}},
  { lr_stimulus: "img/Stim/TS110.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Color: 'blue', correct_response: 'x'}},
  { lr_stimulus: "img/Stim/TS111.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Color: 'blue', correct_response: 'x'}},
  { lr_stimulus: "img/Stim/TS112.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Color: 'blue', correct_response: 'm'}},
  { lr_stimulus: "img/Stim/TS113.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Color: 'blue', correct_response: 'm'}},
  { lr_stimulus: "img/Stim/TS120.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Color: 'blue', correct_response: 'x'}},
  { lr_stimulus: "img/Stim/TS121.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Color: 'blue', correct_response: 'x'}},
  { lr_stimulus: "img/Stim/TS122.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Color: 'blue', correct_response: 'm'}},
  { lr_stimulus: "img/Stim/TS123.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Color: 'blue', correct_response: 'm'}},
  { lr_stimulus: "img/Stim/TS130.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Color: 'blue', correct_response: 'x'}},
  { lr_stimulus: "img/Stim/TS131.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Color: 'blue', correct_response: 'x'}},
  { lr_stimulus: "img/Stim/TS132.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Color: 'blue', correct_response: 'm'}},
  { lr_stimulus: "img/Stim/TS133.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Color: 'blue', correct_response: 'm'}},
];


var learning = {
  type: "image-keyboard-response",
  stimulus: jsPsych.timelineVariable('lr_stimulus'),
  choices: ['x', 'm'],
  data: jsPsych.timelineVariable('data'),
  on_finish: function(data){
    data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
  }
}

var lr_test_TS1 = {
  timeline: [learning],
  timeline_variables: lr_stimuli_TS1,
  sample: {
  type: 'with-replacement',
  size: 1, // 1 trial, with replacement
},
  randomize_order: true,
  repetitions: 1
}

var lr_test_TS2 = {
  timeline: [learning],
  timeline_variables: lr_stimuli_TS2,
  sample: {
  type: 'with-replacement',
  size: 1, // 1 trial, with replacement
},
  randomize_order: true,
  repetitions: 1
}
var lr_task_list = [lr_test_TS1, lr_test_TS2];
var lr_task = lr_task_list[Math.floor((Math.random()) * lr_task_list.length)]

var lr_feedback = {
type: 'html-keyboard-response',
stimulus: function(){
  var last_trial_correct = jsPsych.data.get().filter({TaskType: 'lr'}).last(1).values()[0].correct;
  if(last_trial_correct){
    return '<p style="color:white"> Correct!</p>'
  } else {
    return '<p style="color:white"> Wrong.</p>'
  }
},
choices: jsPsych.NO_KEYS,
trial_duration: 1000,
}

/* define attention trials */
var stim_names_freq = ["img/Stim/at_stim000_b.png","img/Stim/at_stim001_b.png",
"img/Stim/at_stim002_b.png", "img/Stim/at_stim003_b.png", "img/Stim/at_stim010_b.png",
"img/Stim/at_stim011_b.png", "img/Stim/at_stim012_b.png", "img/Stim/at_stim013_b.png",
"img/Stim/at_stim020_b.png", "img/Stim/at_stim021_b.png", "img/Stim/at_stim022_b.png",
"img/Stim/at_stim023_b.png", "img/Stim/at_stim030_b.png", "img/Stim/at_stim031_b.png",
"img/Stim/at_stim032_b.png", "img/Stim/at_stim033_b.png"]
var stim_names_infreq = ["img/Stim/at_stim100_b.png", "img/Stim/at_stim101_b.png",
"img/Stim/at_stim102_b.png", "img/Stim/at_stim103_b.png", "img/Stim/at_stim110_b.png",
"img/Stim/at_stim111_b.png", "img/Stim/at_stim112_b.png", "img/Stim/at_stim113_b.png",
"img/Stim/at_stim120_b.png", "img/Stim/at_stim121_b.png", "img/Stim/at_stim122_b.png",
"img/Stim/at_stim123_b.png", "img/Stim/at_stim130_b.png", "img/Stim/at_stim131_b.png",
"img/Stim/at_stim132_b.png", "img/Stim/at_stim133_b.png"]
var at_stimuli = []
var repetition = []
for (i = 0; i < 1440; i++) {
  //var stimuli = new Object();
  stimuli_freq = stim_names_freq[Math.floor((Math.random()) * stim_names_freq.length)];
  repetition.push(String(stimuli_freq.charAt(16))+ String(stimuli_freq.charAt(17)) + String(stimuli_freq.charAt(18)));


  if (i != 0) {

      while(repetition[i] == repetition[i-1]) {
        stimuli_freq = stim_names_freq[Math.floor((Math.random()) * stim_names_freq.length)];
        repetition[i]=(String(stimuli_freq.charAt(16))+ String(stimuli_freq.charAt(17)) + String(stimuli_freq.charAt(18)));
        if (repetition[i] != repetition[i-1]) {break};
      }
  }

}

var repetition_1 = []
for (i = 0; i < 160; i++) {

  stimuli_infreq = stim_names_infreq[Math.floor((Math.random()) * stim_names_infreq.length)];
  repetition_1.push(String(stimuli_infreq.charAt(16))+ String(stimuli_infreq.charAt(17)) + String(stimuli_infreq.charAt(18)));
  //console.log(repetition_1[i])


  if (i != 0) {

      while(repetition_1[i] == repetition_1[i-1]) {
        stimuli_infreq = stim_names_infreq[Math.floor((Math.random()) * stim_names_infreq.length)];
        repetition_1[i]=(String(stimuli_infreq.charAt(16))+ String(stimuli_infreq.charAt(17)) + String(stimuli_infreq.charAt(18)));
        //console.log(repetition_1[1])
        if (repetition_1[i] != repetition_1[i-1]) {break};
      }
  }

}

for(i = 0; i < repetition_1.length; i++)
{
    repetition.splice(Math.floor((Math.random() * repetition.length)), 0, repetition_1[i]);
}


for (j = 0; j < repetition.length; j++) {
  var stimuli = new Object();
  stimuli.at_stimulus = 'img/Stim/at_stim' + repetition[j] + '_b.png';

  stimuli.data = new Object();


  if (stimuli.at_stimulus.charAt(16) == 0) {
    stimuli.data.at_TrialType = 'frequent';
    stimuli.data.correct_response = 'g'
  } else {
    stimuli.data.at_TrialType = 'infrequent';
    stimuli.data.correct_response = ''
  }
  stimuli.at_fix = rep(stimuli.at_stimulus);

  stimuli.data.test_part = 'test';
  stimuli.data.TaskType = 'at';

  at_stimuli.push(stimuli);

}
//Functions
// replace b with g and create the corresponding at_fix stimuli
  function rep(str) {
      //stimuli.at_stimulus;
      str = setCharAt(str,20,'g');
      return str
  }

  function setCharAt(str,index,chr) {
      if(index > str.length-1) return str;
      return str.substring(0,index) + chr + str.substring(index+1);
  }


/* Combine learning trials */
var lr_node = false;
var fix_duration = 800;
var attention = {
  timeline:[
  {type: "image-keyboard-response",
  stimulus: jsPsych.timelineVariable('at_stimulus'),
  choices: ['g'],
  data: jsPsych.timelineVariable('data'),
  trial_duration: 800,
  //response_ends_trial: false,
  on_finish: function(data){
    fix_duration = 800 - (jsPsych.data.get().filter({TaskType: 'at'}).last(1).select('rt').values);
    //console.log(fix_duration)

    var at_counter = jsPsych.data.get().filter({TaskType: 'at'}).select('rt').values.length
    var lr_counter = jsPsych.data.get().filter({TaskType: 'lr'}).select('rt').values.length //CHECK!!!
    console.log('starts here')

    data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
    var rt_mean = jsPsych.data.get().filter({at_TrialType: 'frequent', key_press: 71}).select('rt').mean();
    var rt_sd = jsPsych.data.get().filter({at_TrialType: 'frequent', key_press: 71}).select('rt').sd();
    data.at_counter = at_counter
    data.lr_counter = lr_counter
    data.at_RunningMean = rt_mean
    data.sd = rt_sd
    data.slow = rt_mean+rt_sd
    data.fast = Math.abs(rt_mean-0.8*rt_sd)


    if (at_counter > 3) {
        //see if the last trial was an infrequent trial
        var last_infreq = jsPsych.data.get().filter({TaskType: 'at'}).last(3).select('at_TrialType').values;
        //if (last_infreq.includes('infrequent') == true) {
        //console.log('there is an infrq')}

        //see if there was an error in the last 3 trials
        var last_correct = jsPsych.data.get().filter({TaskType: 'at'}).last(3).select('correct').values;
        //if (last_correct.includes(false) == true){
        //console.log('there is an error')}

        var last_rt = jsPsych.data.get().filter({at_TrialType: 'frequent'}).last(3).select('rt').values;
        //console.log(last_rt);
        for (var i = 0; i<3; i++){
         if (last_rt[i] <100) {
           last_rt[i] = true
         }
      };
        // if (last_rt.includes(true)) {
        //   console.log('too fast')};

        //calculate trailing RT after the third trial
        var rt_three = jsPsych.data.get().filter({at_TrialType: 'frequent'}).last(3).select('rt').mean();
        data.at_TrailingMean = rt_three


  };

//last_3acc.includes(false) == true|| last_3rt.includes(true) == true|| last_3freq.includes('infrequent') == true
    if (at_counter < 80 || last_infreq.includes('infrequent') || last_correct.includes(false)|| last_rt.includes(true)){
      lr_node = 0
    }  else {

      if(rt_three >= rt_mean+rt_sd){
            lr_node = true;
            data.diff = 'slow'
          } else if (rt_three < Math.abs(rt_mean-0.8*rt_sd)){
                lr_node = false;
                data.diff = 'fast'
            }
            else {lr_node = 0}
      }
    }
  },

{type: "image-keyboard-response",
  stimulus: jsPsych.timelineVariable('at_fix'),
  choices: jsPsych.NO_KEYS,
  response_ends_trial: false,
  trial_duration:fix_duration
}],
}

var if_node_1= {
  timeline: [iti_200,lr_test_TS1,lr_feedback,iti_1000],
  conditional_function: function(data){
    if (lr_node === false){
      return true;
    } else if (lr_node === true){
      return false;
    } else {return false;}
  }
}

var if_node_2= {
  timeline: [iti_200,lr_test_TS2,lr_feedback,iti_1000],
  conditional_function: function(data){
    if (lr_node === true){
      return true;
    }else if (lr_node === false){
      return false;
    } else{return false;}
  }
}



var at_test_procedure = {
  timeline: [attention,if_node_1,if_node_2,iti_200],
  timeline_variables: at_stimuli,
  randomize_order: false,
  repetitions: 1
}

jsPsych.init({
    timeline: [enter_full,consent,instr_1,at_test_procedure,exit_full],
    on_finish: function(){
      var csv = jsPsych.data.get().csv();
      var filename = 'Full_02.csv';
      downloadCSV(csv, filename);
      jsPsych.data.displayData()}
});
