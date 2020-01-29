//----------------------------------------------------------------------------------------------------------------------------------------------------
// DOM STORAGE DATA
//----------------------------------------------------------------------------------------------------------------------------------------------------

var studentsData =
[
    {
        rec_id: js.MD5(),
        FirstName: 'Vicky',
        LastName: 'Kalogera',
        DateOfBirth: '1993-10-30',
        TuittionFees: '2500',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Kostas',
        LastName: 'Grammenos',
        DateOfBirth: '1988-06-19',
        TuittionFees: '2500',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'George',
        LastName: 'Eustathiou',
        DateOfBirth: '1990-04-23',
        TuittionFees: '2500',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Vaso',
        LastName: 'Apostolopoulou',
        DateOfBirth: '1987-01-23',
        TuittionFees: '2500',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Minas',
        LastName: 'Kafatos',
        DateOfBirth: '1991-01-14',
        TuittionFees: '2500',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Pinelopi',
        LastName: 'Kougianou',
        DateOfBirth: '1989-11-07',
        TuittionFees: '2500',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Chrysanthi',
        LastName: 'Avgerou',
        DateOfBirth: '1982-02-12',
        TuittionFees: '2500',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Christos',
        LastName: 'Zerefos',
        DateOfBirth: '1987-11-19',
        TuittionFees: '2500',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Ioannis',
        LastName: 'Miaoulis',
        DateOfBirth: '1983-12-18',
        TuittionFees: '2500',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Fillipos',
        LastName: 'Tsixlis',
        DateOfBirth: '1985-08-25',
        TuittionFees: '2500',
    }
];

var coursesData =
[
    {
        rec_id: js.MD5(),
        Title: 'CB8 Csharp Full Time',
        Stream: 'Csharp',
        Type: 'Full Time',
        StartDate: '2019-05-13',
        EndDate: '2019-08-02',
    },
    {
        rec_id: js.MD5(),
        Title: 'CB8 Csharp Part Time',
        Stream: 'Csharp',
        Type: 'Part Time',
        StartDate: '2019-05-13',
        EndDate: '2019-11-29',
    },
    {
        rec_id: js.MD5(),
        Title: 'CB8 Java Full Time',
        Stream: 'Java',
        Type: 'Full Time',
        StartDate: '2019-05-13',
        EndDate: '2019-08-02',
    },
    {
        Title: 'CB8 Java Part Time',
        Stream: 'Java',
        Type: 'Part Time',
        StartDate: '2019-05-13',
        EndDate: '2019-11-29',
    }
    ];

var trainersData =
[
    {
        rec_id: js.MD5(),
        FirstName: 'Dimitris',
        LastName: 'Papadakis',
        Subject: 'Csharp',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Nick',
        LastName: 'Konstantinou',
        Subject: 'Python',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'George',
        LastName: 'Giannopoulos',
        Subject: 'Java',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Vasilis',
        LastName: 'Kakogiannis',
        Subject: 'Java',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Manos',
        LastName: 'Iliopoulos',
        Subject: 'Java',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Panagiotis',
        LastName: 'Eleutheriou',
        Subject: 'Csharp',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Pinelopi',
        LastName: 'Kougianou',
        Subject: 'Csharp',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Jason',
        LastName: 'Kalakanis',
        Subject: 'Python',
    }
];

var assignmentsData =
[
    {
        rec_id: js.MD5(),
        Title: 'Assignment no1',
        Description: 'Individual Project',
        SubDateTime: '2019-06-21',
        OralMark: '40',
        TotalMark: '60',
    },
    {
        rec_id: js.MD5(),
        Title: 'Assignment no2',
        Description: 'HTML',
        SubDateTime: '2019-09-13',
        OralMark: '20',
        TotalMark: '80',
    },
    {
        rec_id: js.MD5(),
        Title: 'Assignment no3',
        Description: 'MVC',
        SubDateTime: '2019-10-02',
        OralMark: '25',
        TotalMark: '75',
    },
    {
        rec_id: js.MD5(),
        Title: 'Assignment no4',
        Description: 'Design Patterns',
        SubDateTime: '2019-10-11',
        OralMark: '40',
        TotalMark: '60',
    },
    {
        rec_id: js.MD5(),
        Title: 'Assignment no5',
        Description: 'Algorithms',
        SubDateTime: '2019-10-17',
        OralMark: '35',
        TotalMark: '65',
    },
    {
        rec_id: js.MD5(),
        Title: 'Assignment no6',
        Description: 'Trivago',
        SubDateTime: '2019-11-22',
        OralMark: '40',
        TotalMark: '60',
    }
    ];

var trainersPC_Data =
[
    {
        rec_id: js.MD5(),
        FirstName: 'Dimitris',
        LastName: 'Papadakis',
        Subject: 'Csharp',
        Course: 'CB8 Csharp Full Time',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Nick',
        LastName: 'Konstantinou',
        Subject: 'Python',
        Course: 'CB8 Csharp Full Time',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'George',
        LastName: 'Giannopoulos',
        Subject: 'Java',
        Course: 'CB8 Java Full Time',

    },
    {
        rec_id: js.MD5(),
        FirstName: 'Vasilis',
        LastName: 'Kakogiannis',
        Subject: 'Java',
        Course: 'CB8 Java Full Time',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Manos',
        LastName: 'Iliopoulos',
        Subject: 'Java',
        Course: 'CB8 Java Full Time'
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Panagiotis',
        LastName: 'Eleutheriou',
        Subject: 'Csharp',
        Course: 'CB8 Csharp Part Time',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Pinelopi',
        LastName: 'Kougianou',
        Subject: 'Csharp',
        Course: 'CB8 Csharp Part Time',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Jason',
        LastName: 'Kalakanis',
        Subject: 'Python',
        Course: 'CB8 Java Part Time',
    }
];

var studentsPC_Data =
[
    {
        rec_id: js.MD5(),
        FirstName: 'Vicky',
        LastName: 'Kalogera',
        DateOfBirth: '1993-10-30',
        TuittionFees: '2500',
        Course: 'CB8 Csharp Full Time',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Kostas',
        LastName: 'Grammenos',
        DateOfBirth: '1988-06-19',
        TuittionFees: '2500',
        Course: 'CB8 Csharp Full Time',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'George',
        LastName: 'Eustathiou',
        DateOfBirth: '1990-04-23',
        TuittionFees: '2500',
        Course: 'CB8 Csharp Full Time',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Vaso',
        LastName: 'Apostolopoulou',
        DateOfBirth: '1987-01-23',
        TuittionFees: '2500',
        Course: 'CB8 Java Full Time',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Minas',
        LastName: 'Kafatos',
        DateOfBirth: '1991-01-14',
        TuittionFees: '2500',
        Course: 'CB8 Csharp Part Time',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Pinelopi',
        LastName: 'Kougianou',
        DateOfBirth: '1989-11-07',
        TuittionFees: '2500',
        Course: 'CB8 Csharp Part Time',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Chrysanthi',
        LastName: 'Avgerou',
        DateOfBirth: '1982-02-12',
        TuittionFees: '2500',
        Course: 'CB8 Java Full Time',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Christos',
        LastName: 'Zerefos',
        DateOfBirth: '1987-11-19',
        TuittionFees: '2500',
        Course: 'CB8 Java Full Time',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Ioannis',
        LastName: 'Miaoulis',
        DateOfBirth: '1983-12-18',
        TuittionFees: '2500',
        Course: 'CB8 Java Part Time',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Fillipos',
        LastName: 'Tsixlis',
        DateOfBirth: '1985-08-25',
        TuittionFees: '2500',
        Course: 'CB8 Java Part Time',
    }
];

var assignmentsPC_Data =
[
    {
        rec_id: js.MD5(),
        Title: 'Assignment no1',
        Description: 'Individual Project',
        SubDateTime: '2019-06-21',
        OralMark: '40',
        TotalMark: '60',
        Course: 'Csharp',
    },
    {
        rec_id: js.MD5(),
        Title: 'Assignment no1',
        Description: 'Individual Project',
        SubDateTime: '2019-06-21',
        OralMark: '40',
        TotalMark: '60',
        Course: 'Java',
    },
    {
        rec_id: js.MD5(),
        Title: 'Assignment no1',
        Description: 'Individual Project',
        SubDateTime: '2019-06-21',
        OralMark: '40',
        TotalMark: '60',
        Course: 'Python',
    },
    {
        rec_id: js.MD5(),
        Title: 'Assignment no2',
        Description: 'HTML',
        SubDateTime: '2019-09-13',
        OralMark: '20',
        TotalMark: '80',
        Course: 'Csharp',
    },
    {
        rec_id: js.MD5(),
        Title: 'Assignment no2',
        Description: 'HTML',
        SubDateTime: '2019-09-13',
        OralMark: '20',
        TotalMark: '80',
        Course: 'Java',
    },
    {
        rec_id: js.MD5(),
        Title: 'Assignment no3',
        Description: 'MVC',
        SubDateTime: '2019-10-02',
        OralMark: '25',
        TotalMark: '75',
        Course: 'Csharp',
    },
    {
        rec_id: js.MD5(),
        Title: 'Assignment no3',
        Description: 'MVC',
        SubDateTime: '2019-10-02',
        OralMark: '25',
        TotalMark: '75',
        Course: 'Java',
    },
    {
        rec_id: js.MD5(),
        Title: 'Assignment no4',
        Description: 'Design Patterns',
        SubDateTime: '2019-10-11',
        OralMark: '40',
        TotalMark: '60',
        Course: 'Csharp',
    },
    {
        rec_id: js.MD5(),
        Title: 'Assignment no4',
        Description: 'Design Patterns',
        SubDateTime: '2019-10-11',
        OralMark: '40',
        TotalMark: '60',
        Course: 'Java',
    },
    {
        rec_id: js.MD5(),
        Title: 'Assignment no5',
        Description: 'Algorithms',
        SubDateTime: '2019-10-17',
        OralMark: '35',
        TotalMark: '65',
        Course: 'Csharp',
    },
    {
        rec_id: js.MD5(),
        Title: 'Assignment no5',
        Description: 'Algorithms',
        SubDateTime: '2019-10-17',
        OralMark: '35',
        TotalMark: '65',
        Course: 'Java',
    },
    {
        rec_id: js.MD5(),
        Title: 'Assignment no6',
        Description: 'Trivago',
        SubDateTime: '2019-11-22',
        OralMark: '40',
        TotalMark: '60',
        Course: 'Csharp',
    },
    {
        rec_id: js.MD5(),
        Title: 'Assignment no6',
        Description: 'Trivago',
        SubDateTime: '2019-11-22',
        OralMark: '40',
        TotalMark: '60',
        Course: 'Java',
    }
];


var assignmentsPSPC_Data =
[
    {
        rec_id: js.MD5(),
        FirstName: 'Vicky',
        LastName: 'Kalogera',
        Course: 'CB8 Csharp Full Time',
        Assignment: ['Individual Project', 'HTML/CSS'],
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Kostas',
        LastName: 'Grammenos',
        Course: 'CB8 Csharp Full Time',
        Assignment: ['MVC', 'HTML/CSS'],
    },
    {
        rec_id: js.MD5(),
        FirstName: 'George',
        LastName: 'Eustathiou',
        Course: 'CB8 Csharp Full Time',
        Assignment: ['Individual Project', 'HTML/CSS'],
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Vaso',
        LastName: 'Apostolopoulou',
        Course: 'CB8 Java Full Time',
        Assignment: 'Design Patterns',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Minas',
        LastName: 'Kafatos',
        Course: 'CB8 Csharp Part Time',
        Assignment: ['HTML/CSS', 'Design Patterns'],
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Pinelopi',
        LastName: 'Kougianou',
        Course: 'CB8 Csharp Part Time',
        Assignment: 'Design Patterns',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Chrysanthi',
        LastName: 'Avgerou',
        Course: 'CB8 Java Full Time',
        Assignment: ['Individual Project', 'MVC'],
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Christos',
        LastName: 'Zerefos',
        Course: 'CB8 Java Full Time',
        Assignment: 'HTML/CSS',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Ioannis',
        LastName: 'Miaoulis',
        Course: 'CB8 Java Part Time',
        Assignment: 'Individual Project',
    },
    {
        rec_id: js.MD5(),
        FirstName: 'Fillipos',
        LastName: 'Tsixlis',
        Course: 'CB8 Java Part Time',
        Assignment: ['HTML/CSS', 'MVC'],
    }
];
 //----------------------------------------------------------------------------------------------------------------------------------------------------
 // STUDENTS
 //----------------------------------------------------------------------------------------------------------------------------------------------------


//load new entry screen 
$(document).on('click', '.BTN_Add_New_Student', function (event) {
    //Get data from template
    var GetTemplateData = $('.Template_New').html();

    $('.Screen_Data').html(GetTemplateData);
    $('.Screen_Data').find('.btn_Data').html('Save').addClass('BTN_Save_New_Student_Data')
    $('.Screen_Data').show();
});

//new entry screen add button action
$('.Screen_Data').on('click', '.BTN_Save_New_Student_Data', function (event) {
    //To clear all old alerts
    bs.ClearError();

    //Get values
    var FirstName = $('.Screen_Data').find('.FirstName');
    var LastName = $('.Screen_Data').find('.LastName');
    var DateOfBirth = $('.Screen_Data').find('.DateOfBirth');
    var TuittionFees = $('.Screen_Data').find('.TuittionFees');


    if (!document.getElementById("fname").checkValidity()) {}
    else if (!document.getElementById("lname").checkValidity()) {}
    else if (!document.getElementById("dob").checkValidity()) {}
    else if (!document.getElementById("tfees").checkValidity()) {}
    else if (frm.IsEmpty(FirstName.val())) {
        //Show alert
        bs.ShowError("Please enter First Name", FirstName)
    }
    else if (frm.IsEmpty(LastName.val())) {
        //Show alert
        bs.ShowError("Please enter Last Name", LastName)
    }
    else if (frm.IsEmpty(DateOfBirth.val())) {
        //Show alert
        bs.ShowError("Please enter Date of Birth", DateOfBirth)
    }
    else if (frm.IsEmpty(TuittionFees.val())) {
        //Show alert
        bs.ShowError("Please enter Tuittion Fees", TuittionFees)
    }
    else {
        var AddEntry =
        {
            'rec_id': js.MD5(),
            'FirstName': FirstName.val(),
            'LastName': LastName.val(),
            'DateOfBirth': DateOfBirth.val(),
            'TuittionFees': TuittionFees.val(),
        };

        //ls.AddArr(LocalstorageName,AddEntry);
        studentsData.push(AddEntry);

        var d = bs.AlertMsg("Successfully add new student", "success");
        $('.Screen_Data').html(d);

        //Show All Entries

        $(".BTN_View_Students").click();
    }


});
//--->Add - End



//--->View - Start
$(document).on('click', '.BTN_View_Students', function (event) {
    //Get data  
    var AllData = studentsData;


    if (js.Size(AllData) < 1 || js.Size(AllData) == 0) {
        var d = bs.AlertMsg("Oppps...Looks like there are no students. <br><br> You should add a new student first", "warning");
        $('.Screen_Data').html(d).show();
        return false;
    }


    var strTableData = '';
    strTableData += '<table class="table table-hover">';
    strTableData += '<thead>';
    //strTableData += '<tr>';
    strTableData += '<th>ID</th>';
    strTableData += '<th>First Name</th>';
    strTableData += '<th>Last Name</th>';
    strTableData += '<th>Date of Birth</th>';
    strTableData += '<th>Tuittion Fees</th>';
    strTableData += '<th>Actions</th>';
    //strTableData += '</tr>'; 		
    strTableData += '</thead>';


    strTableData += '<tbody>'
    for (var i = 0; i < AllData.length; i++) {
        var val = AllData[i];

        var id = i + 1;

        strTableData += '<tr>';
        strTableData += '<td>' + id + '</td>';
        strTableData += '<td>' + val.FirstName + '</td>';
        strTableData += '<td>' + val.LastName + '</td>';
        strTableData += '<td>' + moment(val.DateOfBirth).format('DD-MM-YYYY') + '</td>';
        strTableData += '<td>' + val.TuittionFees + '</td>';

        //Edit/Delete Options
        var Edit = '<button type="button" class="btn btn-secondary BTN_Edit_Student" rec_id="' + val.rec_id + '" DateOfBirth="' + val.DateOfBirth + '" >Edit</button>  ';
        var Delete = '<button type="button" class="btn btn-secondary BTN_Delete_Student" rec_id="' + val.rec_id + '"  DateOfBirth="' + val.DateOfBirth + '"  first_name="' + val.FirtsName + '"  last_name="' + val.LastName + '" >Delete</button>';

        strTableData += '<td>' + Edit + Delete + '</td>';
        strTableData += '</tr>';

    };
    strTableData += '<tbody>'
    strTableData += '</table>';

    $('.Screen_Data').html(strTableData).show();

});
//--->View - End


//--->Edit - Start	
$(document).on('click', '.BTN_Edit_Student', function (event) {
    var rec_id = $(this).attr('rec_id');
    var DateOfBirth = $(this).attr('DateOfBirth');

    //Get data from template
    var GetTemplateData = $('.Template_New').html();

    $('.Screen_Data').html(GetTemplateData);
    $('.Screen_Data').find('.btn_Data').html('Update').addClass('BTN_Update_Student');
    $('.Screen_Data').find('.btn_Data').attr('rec_id', rec_id);

    //map and grep
    var data = $.map(studentsData, function (val, i) {
        if (val.rec_id == rec_id) {
            return val;
        }
    });

    var FirstName = $('.Screen_Data').find('.FirstName').val(data[0].FirstName);
    var LastName = $('.Screen_Data').find('.LastName').val(data[0].LastName);
    var DateOfBirth = $('.Screen_Data').find('.DateOfBirth').val(data[0].DateOfBirth);
    var TuittionFees = $('.Screen_Data').find('.TuittionFees').val(data[0].TuittionFees);

    $('.Screen_Data').show();
});

//Update Data
$('.Screen_Data').on('click', '.BTN_Update_Student', function (event) {
    //To clear all old alerts
    bs.ClearError();

    //Get values
    var FirstName = $('.Screen_Data').find('.FirstName');
    var LastName = $('.Screen_Data').find('.LastName');
    var DateOfBirth = $('.Screen_Data').find('.DateOfBirth');
    var TuittionFees = $('.Screen_Data').find('.TuittionFees');

    if (!document.getElementById("fname").checkValidity()) {}
    else if (!document.getElementById("lname").checkValidity()) {}
    else if (!document.getElementById("dob").checkValidity()) {}
    else if (!document.getElementById("tfees").checkValidity()) {}
    else if (frm.IsEmpty(FirstName.val())) {
        //Show alert
        bs.ShowError("Please enter First Name", FirstName)
    }
    else if (frm.IsEmpty(LastName.val())) {
        //Show alert
        bs.ShowError("Please enter Last Name", LastName)
    }
    else if (frm.IsEmpty(DateOfBirth.val())) {
        //Show alert
        bs.ShowError("Please enter Date of Birth", DateOfBirth)
    }
    else if (frm.IsEmpty(TuittionFees.val())) {
        //Show alert
        bs.ShowError("Please enter Tuittion Fees", TuittionFees)
    }
    else {
        var rec_id = $(this).attr('rec_id');

        //Update value

        var data = $.map(studentsData, function (val, i) {
            if (val.rec_id == rec_id) {
                val.FirstName = FirstName.val();
                val.LastName = LastName.val();
                val.DateOfBirth = DateOfBirth.val();
                val.TuittionFees = TuittionFees.val();
            }
        });

        var d = bs.AlertMsg("Successfully updated new student", "success");
        $('.Screen_Data').html(data);

        //Show All			 
        $(".BTN_View_Students").click();
    }
});
//--->Edit - End

//--->Delete - Start
$(document).on('click', '.BTN_Delete_Student', function (event) {
    var rec_id = $(this).attr('rec_id');
    var first_name = $(this).attr('first_name');

    var ObjArrOptions =
    {
        title: "Confirmation required",
        text: "Are you sure you want to delete student?",
        //text: "Are you sure you want to delete student (<b>" + first_name + "<b>) ?",
        confirm: function (button) {

            //delete only one element from array
            var newarr = $.map(studentsData, function (val, i) {
                if (val.rec_id !== rec_id) {
                    return val;
                }
            });

            //update array elements
            studentsData = newarr;

            //Show All Data			 
            $(".BTN_View").click();

        },
        cancel: function (button) {
            //close modal
        },
        confirmButton: "Confirm",
        cancelButton: "Cancel",
        // Bootstrap modal and button class
        confirmButtonClass: "btn-danger",
        cancelButtonClass: "btn-default",
        dialogClass: "modal-dialog modal-lg"
    }

    bs.confirm(ObjArrOptions);

});

$(document).on('click', '.BTN_Delete_All_Students', function (event) {
    var AllData = _.sortBy(studentsData, ['DateOfBirth']);

    if (js.Size(AllData) < 1 || js.Size(AllData) == 0) {
        var d = bs.AlertMsg("Oppps...Looks like there are no students. <br><br> You should add a student first", "warning");
        $('.Screen_Data').html(d).show();
        return false;
    }


    var ObjArrOptions =
    {
        title: "Confirmation required",
        text: "Are you sure you want to delete All Students ?",
        confirm: function (button) {
            //delete all data from array
            studentsData = [];
            //Show All data	 
            $(".BTN_View").click();

        },
        cancel: function (button) {
            // nothing to do
        },
        confirmButton: "Confirm",
        cancelButton: "Cancel",
        // Bootstrap modal and button class
        confirmButtonClass: "btn-danger",
        cancelButtonClass: "btn-default",
        dialogClass: "modal-dialog modal-lg"
    }

    bs.confirm(ObjArrOptions);

});
//--->Delete - End

//Show data on page load
if (js.Size(studentsData) > 0) {
    $(".BTN_View_Students").click();
}

 //----------------------------------------------------------------------------------------------------------------------------------------------------
 // COURSES
 //----------------------------------------------------------------------------------------------------------------------------------------------------

$(document).ready(function () {

    //load new entry screen 
    $(document).on('click', '.BTN_Add_New_Course', function (event) {
        //Get data from template
        var GetTemplateData = $('.Template_New').html();

        $('.Screen_Data').html(GetTemplateData);
        $('.Screen_Data').find('.btn_Data').html('Save').addClass('BTN_Save_New_Course_Data')
        $('.Screen_Data').show();
    });

    //new entry screen add button action
    $('.Screen_Data').on('click', '.BTN_Save_New_Course_Data', function (event) {
        //To clear all old alerts
        bs.ClearError();

        //Get values
        var Title = $('.Screen_Data').find('.Title');
        var Stream = $('.Screen_Data').find('.Stream');
        var Type = $('.Screen_Data').find('.Type');
        var StartDate = $('.Screen_Data').find('.StartDate');
        var EndDate = $('.Screen_Data').find('.EndDate');


        if (!document.getElementById("title").checkValidity()) {}
        else if (!document.getElementById("stream").checkValidity()) {}
        else if (!document.getElementById("type").checkValidity()) {}
        else if (!document.getElementById("startDate").checkValidity()) {
        }
        else if (!document.getElementById("endDate").checkValidity()) {
        }
        else if (frm.IsEmpty(Title.val())) {
            //Show alert
            bs.ShowError("Please enter Title", Title)
        }
        else if (frm.IsEmpty(Stream.val())) {
            //Show alert
            bs.ShowError("Please enter Stream", Stream)
        }
        else if (frm.IsEmpty(Type.val())) {
            //Show alert
            bs.ShowError("Please enter Type", Type)
        }
        else if (frm.IsEmpty(StartDate.val())) {
            //Show alert
            bs.ShowError("Please enter Start Date", StartDate)
        }
        else if (frm.IsEmpty(EndDate.val())) {
            //Show alert
            bs.ShowError("Please enter End Date", EndDate)
        }
        else {
            var AddEntry =
            {
                'rec_id': js.MD5(),
                'Title': Title.val(),
                'Stream': Stream.val(),
                'Type': Type.val(),
                'StartDate': StartDate.val(),
                'EndDate': EndDate.val(),
            };

            //ls.AddArr(LocalstorageName,AddEntry);
            coursesData.push(AddEntry);

            var d = bs.AlertMsg("Successfully add new course", "success");
            $('.Screen_Data').html(d);

            //Show All Entries

            $(".BTN_View_Courses").click();
        }


    });
    //--->Add - End

    
    //--->View - Start
    $(document).on('click', '.BTN_View_Courses', function (event) {
        //Get data  
        var AllData = coursesData;


        if (js.Size(AllData) < 1 || js.Size(AllData) == 0) {
            var d = bs.AlertMsg("Oppps...Looks like there are no courses. <br><br> You should add a new course first", "warning");
            $('.Screen_Data').html(d).show();
            return false;
        }


        var strTableData = '';
        strTableData += '<table class="table table-hover">';
        strTableData += '<thead>';
        //strTableData += '<tr>';
        strTableData += '<th>ID</th>';
        strTableData += '<th>Title</th>';
        strTableData += '<th>Stream</th>';
        strTableData += '<th>Type</th>';
        strTableData += '<th>Start Date</th>';
        strTableData += '<th>End Date</th>';
        strTableData += '<th>Actions</th>';
        //strTableData += '</tr>'; 		
        strTableData += '</thead>';


        strTableData += '<tbody>'
        for (var i = 0; i < AllData.length; i++) {
            var val = AllData[i];

            var id = i + 1;

            strTableData += '<tr>';
            strTableData += '<td>' + id + '</td>';
            strTableData += '<td>' + val.Title + '</td>';
            strTableData += '<td>' + val.Stream + '</td>';
            strTableData += '<td>' + val.Type + '</td>';
            strTableData += '<td>' + moment(val.StartDate).format('DD-MM-YYYY') + '</td>';
            strTableData += '<td>' + moment(val.EndDate).format('DD-MM-YYYY') + '</td>';

            //Edit/Delete Options
            var Edit = '<button type="button" class="btn btn-secondary BTN_Edit_Course" rec_id="' + val.rec_id + '" StartDate="' + val.StartDate + '" >Edit</button>  ';
            var Delete = '<button type="button" class="btn btn-secondary BTN_Delete_Course" rec_id="' + val.rec_id + '"  StartDate="' + val.StartDate + '"   EndDate="' + val.EndDate + '"  first_name="' + val.FirtsName + '"  stream="' + val.Stream + '"  type="' + val.Type + '">Delete</button>';

            strTableData += '<td>' + Edit + Delete + '</td>';
            strTableData += '</tr>';

        };
        strTableData += '<tbody>'
        strTableData += '</table>';

        $('.Screen_Data').html(strTableData).show();

    });
    //--->View - End


    //--->Edit - Start	
    $(document).on('click', '.BTN_Edit_Course', function (event) {
        var rec_id = $(this).attr('rec_id');
        var StartDate = $(this).attr('StartDate');

        //Get data from template
        var GetTemplateData = $('.Template_New').html();

        $('.Screen_Data').html(GetTemplateData);
        $('.Screen_Data').find('.btn_Data').html('Update').addClass('BTN_Update_Course');
        $('.Screen_Data').find('.btn_Data').attr('rec_id', rec_id);

        //map and grep
        var data = $.map(coursesData, function (val, i) {
            if (val.rec_id == rec_id) {
                return val;
            }
        });

        var Title = $('.Screen_Data').find('.Title').val(data[0].Title);
        var Stream = $('.Screen_Data').find('.Stream').val(data[0].Stream);
        var Type = $('.Screen_Data').find('.Type').val(data[0].Type);
        var StartDate = $('.Screen_Data').find('.StartDate').val(data[0].StartDate);
        var EndDate = $('.Screen_Data').find('.EndDate').val(data[0].EndDate);

        $('.Screen_Data').show();
    });

    //Update Data
    $('.Screen_Data').on('click', '.BTN_Update_Course', function (event) {
        //To clear all old alerts
        bs.ClearError();

        //Get values
        var Title = $('.Screen_Data').find('.Title');
        var Stream = $('.Screen_Data').find('.Stream');
        var Type = $('.Screen_Data').find('.Type');
        var StartDate = $('.Screen_Data').find('.StartDate');
        var EndDate = $('.Screen_Data').find('.EndDate');

        if (!document.getElementById("title").checkValidity()) {}
        else if (!document.getElementById("stream").checkValidity()) {}
        else if (!document.getElementById("type").checkValidity()) {}
        else if (!document.getElementById("startDate").checkValidity()) {}
        else if (!document.getElementById("endDate").checkValidity()) {}
        else if (frm.IsEmpty(Title.val())) {
            //Show alert
            bs.ShowError("Please enter Title", Title)
        }
        else if (frm.IsEmpty(Stream.val())) {
            //Show alert
            bs.ShowError("Please enter Stream", Stream)
        }
        else if (frm.IsEmpty(Type.val())) {
            //Show alert
            bs.ShowError("Please enter Type", Type)
        }
        else if (frm.IsEmpty(StartDate.val())) {
            //Show alert
            bs.ShowError("Please enter Start Date", StartDate)
        }
        else if (frm.IsEmpty(EndDate.val())) {
            //Show alert
            bs.ShowError("Please enter End Date", EndDate)
        }
        else {
            var rec_id = $(this).attr('rec_id');

            //Update value

            var data = $.map(coursesData, function (val, i) {
                if (val.rec_id == rec_id) {
                    val.Title = Title.val();
                    val.Stream = Stream.val();
                    val.Type = Type.val();
                    val.StartDate = StartDate.val();
                    val.EndDate = EndDate.val();
                }
            });

            var d = bs.AlertMsg("Successfully updated new course", "success");
            $('.Screen_Data').html(d);

            //Show All			 
            $(".BTN_View_Courses").click();
        }
    });
    //--->Edit - End

    //--->Delete - Start
    $(document).on('click', '.BTN_Delete_Course', function (event) {
        var rec_id = $(this).attr('rec_id');

        var ObjArrOptions =
        {
            title: "Confirmation required",
            text: "Are you sure you want to delete course?",
            confirm: function (button) {

                //delete only one element from array
                var newarr = $.map(coursesData, function (val, i) {
                    if (val.rec_id !== rec_id) {
                        return val;
                    }
                });

                //update array elements
                coursesData = newarr;

                //Show All Data			 
                $(".BTN_View_Courses").click();

            },
            cancel: function (button) {
                //close modal
            },
            confirmButton: "Confirm",
            cancelButton: "Cancel",
            // Bootstrap modal and button class
            confirmButtonClass: "btn-danger",
            cancelButtonClass: "btn-default",
            dialogClass: "modal-dialog modal-lg"
        }

        bs.confirm(ObjArrOptions);

    });

    $(document).on('click', '.BTN_Delete_All_Courses', function (event) {
        var AllData = _.sortBy(coursesData, ['StartDate']);

        if (js.Size(AllData) < 1 || js.Size(AllData) == 0) {
            var d = bs.AlertMsg("Oppps...Looks like there are no courses. <br><br> You should add a course first", "warning");
            $('.Screen_Data').html(d).show();
            return false;
        }


        var ObjArrOptions =
        {
            title: "Confirmation required",
            text: "Are you sure you want to delete All Courses ?",
            confirm: function (button) {
                //delete all data from array
                coursesData = [];
                //Show All data	 
                $(".BTN_View_Courses").click();

            },
            cancel: function (button) {
                // nothing to do
            },
            confirmButton: "Confirm",
            cancelButton: "Cancel",
            // Bootstrap modal and button class
            confirmButtonClass: "btn-danger",
            cancelButtonClass: "btn-default",
            dialogClass: "modal-dialog modal-lg"
        }

        bs.confirm(ObjArrOptions);

    });
    //--->Delete - End

    //Show data on page load
    if (js.Size(coursesData) > 0) {
        $(".BTN_View_Courses").click();
    }

    //----------------------------------------------------------------------------------------------------------------------------------------------------
    // TRAINERS
    //----------------------------------------------------------------------------------------------------------------------------------------------------

    //load new entry screen 
    $(document).on('click', '.BTN_Add_New_Tr', function (event) {
        //Get data from template
        var GetTemplateData = $('.Template_New').html();

        $('.Screen_Data').html(GetTemplateData);
        $('.Screen_Data').find('.btn_Data').html('Save').addClass('BTN_Save_New_Tr_Data')
        $('.Screen_Data').show();
    });

    //new entry screen add button action
    $('.Screen_Data').on('click', '.BTN_Save_New_Tr_Data', function (event) {
        //To clear all old alerts
        bs.ClearError();
        //Get values
        var FirstName = $('.Screen_Data').find('.FirstName');
        var LastName = $('.Screen_Data').find('.LastName');
        var Subject = $('.Screen_Data').find('.Subject');


        if (!document.getElementById("fname").checkValidity()) {}
        else if (!document.getElementById("lname").checkValidity()) {}
        else if (!document.getElementById("subject").checkValidity()) {}
        else if (frm.IsEmpty(FirstName.val())) {
            //Show alert
            bs.ShowError("Please enter First Name", FirstName)
        }
        else if (frm.IsEmpty(LastName.val())) {
            //Show alert
            bs.ShowError("Please enter Last Name", LastName)
        }
        else if (frm.IsEmpty(Subject.val())) {
            //Show alert
            bs.ShowError("Please enter Subject", Subject)
        }
        else {
            var AddEntry =
            {
                'rec_id': js.MD5(),
                'FirstName': FirstName.val(),
                'LastName': LastName.val(),
                'Subject': Subject.val(),
            };

            //ls.AddArr(LocalstorageName,AddEntry);
            trainersData.push(AddEntry);

            var d = bs.AlertMsg("Successfully add new trainer", "success");
            $('.Screen_Data').html(d);

            //Show All Entries

            $(".BTN_View").click();
        }


    });
    //--->Add - End



    //--->View - Start
    $(document).on('click', '.BTN_View_Tr', function (event) {
        //Get data  
        var AllData = trainersData;


        if (js.Size(AllData) < 1 || js.Size(AllData) == 0) {
            var d = bs.AlertMsg("Oppps...Looks like there are no trainers. <br><br> You should add a new trainer first", "warning");
            $('.Screen_Data').html(d).show();
            return false;
        }


        var strTableData = '';
        strTableData += '<table class="table table-hover">';
        strTableData += '<thead>';
        //strTableData += '<tr>';
        strTableData += '<th>ID</th>';
        strTableData += '<th>First Name</th>';
        strTableData += '<th>Last Name</th>';
        strTableData += '<th>Subject</th>';
        strTableData += '<th>Actions</th>';
        //strTableData += '</tr>'; 		
        strTableData += '</thead>';


        strTableData += '<tbody>'
        for (var i = 0; i < AllData.length; i++) {
            var val = AllData[i];

            var id = i + 1;

            strTableData += '<tr>';
            strTableData += '<td>' + id + '</td>';
            strTableData += '<td>' + val.FirstName + '</td>';
            strTableData += '<td>' + val.LastName + '</td>';
            strTableData += '<td>' + val.Subject + '</td>';

            //Edit/Delete Options
            var Edit = '<button type="button" class="btn btn-secondary BTN_Edit_Tr" rec_id="' + val.rec_id + '" >Edit</button>  ';
            var Delete = '<button type="button" class="btn btn-secondary BTN_Delete_Tr" rec_id="' + val.rec_id + '"  first_name="' + val.FirtsName + '"  last_name="' + val.LastName + '" subject="' + val.Subject + '" >Delete</button>';

            strTableData += '<td>' + Edit + Delete + '</td>';
            strTableData += '</tr>';

        };
        strTableData += '<tbody>'
        strTableData += '</table>';

        $('.Screen_Data').html(strTableData).show();

    });
    //--->View - End


    //--->Edit - Start	
    $(document).on('click', '.BTN_Edit_Tr', function (event) {
        var rec_id = $(this).attr('rec_id');
        //var FirstName = $(this).attr('FirstName');

        //Get data from template
        var GetTemplateData = $('.Template_New').html();

        $('.Screen_Data').html(GetTemplateData);
        $('.Screen_Data').find('.btn_Data').html('Update').addClass('BTN_Update_Tr_Data');
        $('.Screen_Data').find('.btn_Data').attr('rec_id', rec_id);

        //map and grep
        var data = $.map(trainersData, function (val, i) {
            if (val.rec_id == rec_id) {
                return val;
            }
        });



        var FirstName = $('.Screen_Data').find('.FirstName').val(data[0].FirstName);
        var LastName = $('.Screen_Data').find('.LastName').val(data[0].LastName);
        var Subject = $('.Screen_Data').find('.Subject').val(data[0].Subject);

        $('.Screen_Data').show();
    });

    //Update Data
    $('.Screen_Data').on('click', '.BTN_Update_Tr_Data', function (event) {
        //To clear all old alerts
        bs.ClearError();

        //Get values
        var FirstName = $('.Screen_Data').find('.FirstName');
        var LastName = $('.Screen_Data').find('.LastName');
        var Subject = $('.Screen_Data').find('.Subject');


        if (!document.getElementById("fname").checkValidity()) {}
        else if (!document.getElementById("lname").checkValidity()) {}
        else if (!document.getElementById("subject").checkValidity()) {}
        else if (frm.IsEmpty(FirstName.val())) {
            //Show alert
            bs.ShowError("Please enter First Name", FirstName)
        }
        else if (frm.IsEmpty(LastName.val())) {
            //Show alert
            bs.ShowError("Please enter Last Name", LastName)
        }
        else if (frm.IsEmpty(Subject.val())) {
            //Show alert
            bs.ShowError("Please enter Subject", Subject)
        }
        else {
            var rec_id = $(this).attr('rec_id');

            //Update value

            var data = $.map(trainersData, function (val, i) {
                if (val.rec_id == rec_id) {
                    val.FirstName = FirstName.val();
                    val.LastName = LastName.val();
                    val.Subject = Subject.val();
                }
            });

            var d = bs.AlertMsg("Successfully updated new trainer", "success");
            $('.Screen_Data').html(d);

            //Show All			 
            $(".BTN_View_Tr").click();
        }
    });
    //--->Edit - End

    //--->Delete - Start
    $(document).on('click', '.BTN_Delete_Tr', function (event) {
        var rec_id = $(this).attr('rec_id');
        var fname = $(this).attr('fname');

        var ObjArrOptions =
        {
            title: "Confirmation required",
            text: "Are you sure you want to delete trainer?",
            confirm: function (button) {

                //delete only one element from array
                var newarr = $.map(trainersData, function (val, i) {
                    if (val.rec_id !== rec_id) {
                        return val;
                    }
                });

                //update array elements
                trainersData = newarr;

                //Show All Data			 
                $(".BTN_View_Tr").click();

            },
            cancel: function (button) {
                //close modal
            },
            confirmButton: "Confirm",
            cancelButton: "Cancel",
            // Bootstrap modal and button class
            confirmButtonClass: "btn-danger",
            cancelButtonClass: "btn-default",
            dialogClass: "modal-dialog modal-lg"
        }

        bs.confirm(ObjArrOptions);

    });

    $(document).on('click', '.BTN_Delete_All_Tr', function (event) {
        var AllData = _.sortBy(trainersData, ['FirstName']);

        if (js.Size(AllData) < 1 || js.Size(AllData) == 0) {
            var d = bs.AlertMsg("Oppps...Looks like there are no trainers. <br><br> You should add a trainer first", "warning");
            $('.Screen_Data').html(d).show();
            return false;
        }


        var ObjArrOptions =
        {
            title: "Confirmation required",
            text: "Are you sure you want to delete All Trainers ?",
            confirm: function (button) {
                //delete all data from array
                trainersData = [];
                //Show All data	 
                $(".BTN_View_Tr").click();

            },
            cancel: function (button) {
                // nothing to do
            },
            confirmButton: "Confirm",
            cancelButton: "Cancel",
            // Bootstrap modal and button class
            confirmButtonClass: "btn-danger",
            cancelButtonClass: "btn-default",
            dialogClass: "modal-dialog modal-lg"
        }

        bs.confirm(ObjArrOptions);

    });
    //--->Delete - End

    //Show data on page load
    if (js.Size(trainersData) > 0) {
        $(".BTN_View_Tr").click();
    }

          
//----------------------------------------------------------------------------------------------------------------------------------------------------
//  ASSIGNMENTS
//----------------------------------------------------------------------------------------------------------------------------------------------------

    //load new entry screen 
    $(document).on('click', '.BTN_Add_New_A', function (event) {
        //Get data from template
        var GetTemplateData = $('.Template_New').html();

        $('.Screen_Data').html(GetTemplateData);
        $('.Screen_Data').find('.btn_Data').html('Save').addClass('BTN_Save_New_A_Data')
        $('.Screen_Data').show();
    });

    //new entry screen add button action
    $('.Screen_Data').on('click', '.BTN_Save_New_A_Data', function (event) {
        //To clear all old alerts
        bs.ClearError();

        //Get values
        var Title = $('.Screen_Data').find('.Title');
        var Description = $('.Screen_Data').find('.Description');
        var SubDateTime = $('.Screen_Data').find('.SubDateTime');
        var OralMark = $('.Screen_Data').find('.OralMark');
        var TotalMark = $('.Screen_Data').find('.TotalMark');


        if (!document.getElementById("title").checkValidity()) {}
        else if (!document.getElementById("description").checkValidity()) {}
        else if (!document.getElementById("SubDateTime").checkValidity()) {}
        else if (!document.getElementById("oralMark").checkValidity()) {}
        else if (!document.getElementById("totalMark").checkValidity()) {}
        else if (frm.IsEmpty(Title.val())) {
            //Show alert
            bs.ShowError("Please enter Title", Title)
        }
        else if (frm.IsEmpty(Description.val())) {
            //Show alert
            bs.ShowError("Please enter Description", Description)
        }
        else if (frm.IsEmpty(OralMark.val())) {
            //Show alert
            bs.ShowError("Please enter Oral Mark", OralMark)
        }
        else if (frm.IsEmpty(TotalMark.val())) {
            //Show alert
            bs.ShowError("Please enter Total Mark", TotalMark)
        }
        else if (frm.IsEmpty(SubDateTime.val())) {
            //Show alert
            bs.ShowError("Please enter Submission Date", SubDateTime)
        }
        else {
            var AddEntry =
            {
                'rec_id': js.MD5(),
                'Title': Title.val(),
                'Description': Description.val(),
                'SubDateTime': SubDateTime.val(),
                'OralMark': OralMark.val(),
                'TotalMark': TotalMark.val(),
            };

            assignmentsData.push(AddEntry);

            var d = bs.AlertMsg("Successfully add new assignment", "success");
            $('.Screen_Data').html(d);

            //Show All Entries

            $(".BTN_View_A").click();
        }


    });
    //--->Add - End

    //--->View - Start
    $(document).on('click', '.BTN_View_A', function (event) {
        //Get data  
        var AllData = assignmentsData;


        if (js.Size(AllData) < 1 || js.Size(AllData) == 0) {
            var d = bs.AlertMsg("Oppps...Looks like there are no assignments. <br><br> You should add a new assignment first", "warning");
            $('.Screen_Data').html(d).show();
            return false;
        }


        var strTableData = '';
        strTableData += '<table class="table table-hover">';
        strTableData += '<thead>';
        //strTableData += '<tr>';
        strTableData += '<th>ID</th>';
        strTableData += '<th>Title</th>';
        strTableData += '<th>Description</th>';
        strTableData += '<th>Submission Date</th>';
        strTableData += '<th>OralMark</th>';
        strTableData += '<th>TotalMark</th>';
        strTableData += '<th>Actions</th>';
        //strTableData += '</tr>'; 		
        strTableData += '</thead>';


        strTableData += '<tbody>'
        for (var i = 0; i < AllData.length; i++) {
            var val = AllData[i];

            var id = i + 1;

            strTableData += '<tr>';
            strTableData += '<td>' + id + '</td>';
            strTableData += '<td>' + val.Title + '</td>';
            strTableData += '<td>' + val.Description + '</td>';
            strTableData += '<td>' + moment(val.SubDateTime).format('DD-MM-YYYY') + '</td>';
            strTableData += '<td>' + val.OralMark + '</td>';
            strTableData += '<td>' + val.TotalMark + '</td>';

            //Edit/Delete Options
            var Edit = '<button type="button" class="btn btn-secondary BTN_Edit_A" rec_id="' + val.rec_id + '" SubDateTime="' + val.SubDateTime + '" >Edit</button>  ';
            var Delete = '<button type="button" class="btn btn-secondary BTN_Delete_A" rec_id="' + val.rec_id + '"  SubDateTime="' + val.SubDateTime + '"  title="' + val.Title + '"  description="' + val.Description + '"  oralMark="' + val.OralMark + '"  totalMark="' + val.TotalMark + '">Delete</button>';

            strTableData += '<td>' + Edit + Delete + '</td>';
            strTableData += '</tr>';

        };
        strTableData += '<tbody>'
        strTableData += '</table>';

        $('.Screen_Data').html(strTableData).show();

    });
    //--->View - End


    //--->Edit - Start	
    $(document).on('click', '.BTN_Edit_A', function (event) {
        var rec_id = $(this).attr('rec_id');
        var SubDateTime = $(this).attr('SubDateTime');

        //Get data from template
        var GetTemplateData = $('.Template_New').html();

        $('.Screen_Data').html(GetTemplateData);
        $('.Screen_Data').find('.btn_Data').html('Update').addClass('BTN_Update_A_Data');
        $('.Screen_Data').find('.btn_Data').attr('rec_id', rec_id);

        //map and grep
        var data = $.map(assignmentsData, function (val, i) {
            if (val.rec_id == rec_id) {
                return val;
            }
        });
               
        var Title = $('.Screen_Data').find('.Title').val(data[0].Title);
        var Description = $('.Screen_Data').find('.Description').val(data[0].Description);
        var SubDateTime = $('.Screen_Data').find('.SubDateTime').val(data[0].SubDateTime);
        var OralMark = $('.Screen_Data').find('.OralMark').val(data[0].OralMark);
        var TotalMark = $('.Screen_Data').find('.TotalMark').val(data[0].TotalMark);

        $('.Screen_Data').show();
    });

    //Update Data
    $('.Screen_Data').on('click', '.BTN_Update_A_Data', function (event) {
        //To clear all old alerts
        bs.ClearError();

        //Get values
        var Title = $('.Screen_Data').find('.Title');
        var Description = $('.Screen_Data').find('.Description');
        var OralMark = $('.Screen_Data').find('.OralMark');
        var TotalMark = $('.Screen_Data').find('.TotalMark');
        var SubDateTime = $('.Screen_Data').find('.SubDateTime');

        if (!document.getElementById("title").checkValidity()) {}
        else if (!document.getElementById("description").checkValidity()) {}
        else if (!document.getElementById("oralMark").checkValidity()) {}
        else if (!document.getElementById("totalMark").checkValidity()) {}
        else if (!document.getElementById("SubDateTime").checkValidity()) {}
        else if (frm.IsEmpty(Title.val())) {
            //Show alert
            bs.ShowError("Please enter Title", Title)
        }
        else if (frm.IsEmpty(Description.val())) {
            //Show alert
            bs.ShowError("Please enter Description", Description)
        }
        else if (frm.IsEmpty(OralMark.val())) {
            //Show alert
            bs.ShowError("Please enter Oral Mark", OralMark)
        }
        else if (frm.IsEmpty(TotalMark.val())) {
            //Show alert
            bs.ShowError("Please enter Total Mark", TotalMark)
        }
        else if (frm.IsEmpty(SubDateTime.val())) {
            //Show alert
            bs.ShowError("Please enter Submission Date", SubDateTime)
        }
        else {
            var rec_id = $(this).attr('rec_id');

            //Update value

            var data = $.map(assignmentsData, function (val, i) {
                if (val.rec_id == rec_id) {
                    val.Title = Title.val();
                    val.Description = Description.val();
                    val.SubDateTime = SubDateTime.val();
                    val.OralMark = OralMark.val();
                    val.TotalMark = TotalMark.val();
                }
            });

            var d = bs.AlertMsg("Successfully updated new asignment", "success");
            $('.Screen_Data').html(d);

            //Show All			 
            $(".BTN_View_A").click();
        }
    });
    //--->Edit - End

    //--->Delete - Start
    $(document).on('click', '.BTN_Delete_A', function (event) {
        var rec_id = $(this).attr('rec_id');

        var ObjArrOptions =
        {
            title: "Confirmation required",
            text: "Are you sure you want to delete assignment?",
            confirm: function (button) {

                //delete only one element from array
                var newarr = $.map(assignmentsData, function (val, i) {
                    if (val.rec_id !== rec_id) {
                        return val;
                    }
                });

                //update array elements
                assignmentsData = newarr;

                //Show All Data			 
                $(".BTN_View_A").click();

            },
            cancel: function (button) {
                //close modal
            },
            confirmButton: "Confirm",
            cancelButton: "Cancel",
            // Bootstrap modal and button class
            confirmButtonClass: "btn-danger",
            cancelButtonClass: "btn-default",
            dialogClass: "modal-dialog modal-lg"
        }

        bs.confirm(ObjArrOptions);

    });

    $(document).on('click', '.BTN_Delete_All_A', function (event) {
        var AllData = _.sortBy(assignmentsData, ['SubDateTime']);

        if (js.Size(AllData) < 1 || js.Size(AllData) == 0) {
            var d = bs.AlertMsg("Oppps...Looks like there are no assignments. <br><br> You should add a assignment first", "warning");
            $('.Screen_Data').html(d).show();
            return false;
        }


        var ObjArrOptions =
        {
            title: "Confirmation required",
            text: "Are you sure you want to delete All Assignments ?",
            confirm: function (button) {
                //delete all data from array
                assignmentsData = [];
                //Show All data	 
                $(".BTN_View_A").click();

            },
            cancel: function (button) {
                // nothing to do
            },
            confirmButton: "Confirm",
            cancelButton: "Cancel",
            // Bootstrap modal and button class
            confirmButtonClass: "btn-danger",
            cancelButtonClass: "btn-default",
            dialogClass: "modal-dialog modal-lg"
        }

        bs.confirm(ObjArrOptions);

    });
    //--->Delete - End

    //Show data on page load
    if (js.Size(assignmentsData) > 0) {
        $(".BTN_View_A").click();
    }
       
//----------------------------------------------------------------------------------------------------------------------------------------------------
//  TRAINERS PER COURSE
//----------------------------------------------------------------------------------------------------------------------------------------------------

    //load new entry screen 
    $(document).on('click', '.BTN_Add_New_TPC', function (event) {
        //Get data from template
        var GetTemplateData = $('.Template_New').html();

        $('.Screen_Data').html(GetTemplateData);
        $('.Screen_Data').find('.btn_Data').html('Save').addClass('BTN_Save_New_TPC_Data')
        $('.Screen_Data').show();
    });

    //new entry screen add button action
    $('.Screen_Data').on('click', '.BTN_Save_New_TPC_Data', function (event) {
        //To clear all old alerts
        bs.ClearError();
        //Get values
        var FirstName = $('.Screen_Data').find('.FirstName');
        var LastName = $('.Screen_Data').find('.LastName');
        var Subject = $('.Screen_Data').find('.Subject');
        var Course = $('.Screen_Data').find('.Course');


        if (!document.getElementById("fname").checkValidity()) {}
        else if (!document.getElementById("lname").checkValidity()) {}
        else if (!document.getElementById("subject").checkValidity()) {}
        else if (!document.getElementById("course").checkValidity()) {}
        else if (frm.IsEmpty(FirstName.val())) {
            //Show alert
            bs.ShowError("Please enter First Name", FirstName)
        }
        else if (frm.IsEmpty(LastName.val())) {
            //Show alert
            bs.ShowError("Please enter Last Name", LastName)
        }
        else if (frm.IsEmpty(Subject.val())) {
            //Show alert
            bs.ShowError("Please enter Subject", Subject)
        }
        else if (frm.IsEmpty(Course.val())) {
            //Show alert
            bs.ShowError("Please select Course", Course)
        }
        else {
            var AddEntry =
            {
                'rec_id': js.MD5(),
                'FirstName': FirstName.val(),
                'LastName': LastName.val(),
                'Subject': Subject.val(),
                'Course': Course.val(),
            };

            //ls.AddArr(LocalstorageName,AddEntry);
            trainersPC_Data.push(AddEntry);

            var d = bs.AlertMsg("Successfully add new trainer", "success");
            $('.Screen_Data').html(d);

            //Show All Entries

            $(".BTN_View_TPC").click();
        }


    });
    //--->Add - End



    //--->View - Start
    $(document).on('click', '.BTN_View_TPC', function (event) {
        //Get data  
        var AllData = trainersPC_Data;


        if (js.Size(AllData) < 1 || js.Size(AllData) == 0) {
            var d = bs.AlertMsg("Oppps...Looks like there are no trainers. <br><br> You should add a new trainer first", "warning");
            $('.Screen_Data').html(d).show();
            return false;
        }


        var strTableData = '';
        strTableData += '<table class="table table-hover" id="myTable">';
        strTableData += '<thead>';
        //strTableData += '<tr>';
        strTableData += '<th>ID</th>';
        strTableData += '<th>First Name</th>';
        strTableData += '<th>Last Name</th>';
        strTableData += '<th>Subject</th>';
        strTableData += '<th>Course</th>';
        strTableData += '<th>Actions</th>';
        //strTableData += '</tr>'; 		
        strTableData += '</thead>';


        strTableData += '<tbody>'
        for (var i = 0; i < AllData.length; i++) {
            var val = AllData[i];

            var id = i + 1;

            strTableData += '<tr>';
            strTableData += '<td>' + id + '</td>';
            strTableData += '<td>' + val.FirstName + '</td>';
            strTableData += '<td>' + val.LastName + '</td>';
            strTableData += '<td>' + val.Subject + '</td>';
            strTableData += '<td>' + val.Course + '</td>';

            //Edit/Delete Options
            var Edit = '<button type="button" class="btn btn-secondary BTN_Edit_TPC" rec_id="' + val.rec_id + '" >Edit</button>  ';
            var Delete = '<button type="button" class="btn btn-secondary BTN_Delete_TPC" rec_id="' + val.rec_id + '"  first_name="' + val.FirtsName + '"  last_name="' + val.LastName + '" subject="' + val.Subject + '" course="' + val.Course + '">Delete</button>';

            strTableData += '<td>' + Edit + Delete + '</td>';
            strTableData += '</tr>';

        };
        strTableData += '<tbody>'
        strTableData += '</table>';

        $('.Screen_Data').html(strTableData).show();

    });
    //--->View - End


    //--->Edit - Start	
    $(document).on('click', '.BTN_Edit_TPC', function (event) {
        var rec_id = $(this).attr('rec_id');
        //var FirstName = $(this).attr('FirstName');

        //Get data from template
        var GetTemplateData = $('.Template_New').html();

        $('.Screen_Data').html(GetTemplateData);
        $('.Screen_Data').find('.btn_Data').html('Update').addClass('BTN_Update_TPC_Data');
        $('.Screen_Data').find('.btn_Data').attr('rec_id', rec_id);

        //map and grep
        var data = $.map(trainersPC_Data, function (val, i) {
            if (val.rec_id == rec_id) {
                return val;
            }
        });

        var FirstName = $('.Screen_Data').find('.FirstName').val(data[0].FirstName);
        var LastName = $('.Screen_Data').find('.LastName').val(data[0].LastName);
        var Subject = $('.Screen_Data').find('.Subject').val(data[0].Subject);

        $('.Screen_Data').show();
    });

    //Update Data
    $('.Screen_Data').on('click', '.BTN_Update_TPC_Data', function (event) {
        //To clear all old alerts
        bs.ClearError();

        //Get values
        var FirstName = $('.Screen_Data').find('.FirstName');
        var LastName = $('.Screen_Data').find('.LastName');
        var Subject = $('.Screen_Data').find('.Subject');
        var Course = $('.Screen_Data').find('.Course');
        
        if (!document.getElementById("fname").checkValidity()) {}
        else if (!document.getElementById("lname").checkValidity()) {}
        else if (!document.getElementById("subject").checkValidity()) {}
        else if (!document.getElementById("course").checkValidity()) {}
        else if (frm.IsEmpty(FirstName.val())) {
            //Show alert
            bs.ShowError("Please enter First Name", FirstName)
        }
        else if (frm.IsEmpty(LastName.val())) {
            //Show alert
            bs.ShowError("Please enter Last Name", LastName)
        }
        else if (frm.IsEmpty(Subject.val())) {
            //Show alert
            bs.ShowError("Please enter Subject", Subject)
        }
        else if (frm.IsEmpty(Course.val())) {
            //Show alert
            bs.ShowError("Please select Course", Course)
        }
        else {
            var rec_id = $(this).attr('rec_id');

            //Update value

            var data = $.map(trainersPC_Data, function (val, i) {
                if (val.rec_id == rec_id) {
                    val.FirstName = FirstName.val();
                    val.LastName = LastName.val();
                    val.Subject = Subject.val();
                    val.Course = Course.val();
                }
            });

            var d = bs.AlertMsg("Successfully updated new trainer", "success");
            $('.Screen_Data').html(d);

            //Show All			 
            $(".BTN_View_TPC").click();
        }
    });
    //--->Edit - End

    //--->Delete - Start
    $(document).on('click', '.BTN_Delete_TPC', function (event) {
        var rec_id = $(this).attr('rec_id');
        var fname = $(this).attr('fname');

        var ObjArrOptions =
        {
            title: "Confirmation required",
            text: "Are you sure you want to delete trainer?",
            confirm: function (button) {

                //delete only one element from array
                var newarr = $.map(trainersPC_Data, function (val, i) {
                    if (val.rec_id !== rec_id) {
                        return val;
                    }
                });

                //update array elements
                trainersPC_Data = newarr;

                //Show All Data			 
                $(".BTN_View_TPC").click();

            },
            cancel: function (button) {
                //close modal
            },
            confirmButton: "Confirm",
            cancelButton: "Cancel",
            // Bootstrap modal and button class
            confirmButtonClass: "btn-danger",
            cancelButtonClass: "btn-default",
            dialogClass: "modal-dialog modal-lg"
        }

        bs.confirm(ObjArrOptions);

    });

    $(document).on('click', '.BTN_Delete_All_TPC', function (event) {
        var AllData = _.sortBy(trainersPC_Data, ['FirstName']);

        if (js.Size(AllData) < 1 || js.Size(AllData) == 0) {
            var d = bs.AlertMsg("Oppps...Looks like there are no trainers. <br><br> You should add a trainer first", "warning");
            $('.Screen_Data').html(d).show();
            return false;
        }


        var ObjArrOptions =
        {
            title: "Confirmation required",
            text: "Are you sure you want to delete All Trainers ?",
            confirm: function (button) {
                //delete all data from array
                trainersPC_Data = [];
                //Show All data	 
                $(".BTN_View_TPC").click();

            },
            cancel: function (button) {
                // nothing to do
            },
            confirmButton: "Confirm",
            cancelButton: "Cancel",
            // Bootstrap modal and button class
            confirmButtonClass: "btn-danger",
            cancelButtonClass: "btn-default",
            dialogClass: "modal-dialog modal-lg"
        }

        bs.confirm(ObjArrOptions);

    });
    //--->Delete - End

    //Show data on page load
    if (js.Size(trainersPC_Data) > 0) {
        $(".BTN_View_TPC").click();
    }


 //----------------------------------------------------------------------------------------------------------------------------------------------------
 //   STUDENTS PER COURSE
 //----------------------------------------------------------------------------------------------------------------------------------------------------

    //load new entry screen 
    $(document).on('click', '.BTN_Add_New_SPC', function (event) {
        //Get data from template
        var GetTemplateData = $('.Template_New').html();

        $('.Screen_Data').html(GetTemplateData);
        $('.Screen_Data').find('.btn_Data').html('Save').addClass('BTN_Save_New_SPC_Data')
        $('.Screen_Data').show();
    });

    //new entry screen add button action
    $('.Screen_Data').on('click', '.BTN_Save_New_SPC_Data', function (event) {
        //To clear all old alerts
        bs.ClearError();

        //Get values
        var FirstName = $('.Screen_Data').find('.FirstName');
        var LastName = $('.Screen_Data').find('.LastName');
        var DateOfBirth = $('.Screen_Data').find('.DateOfBirth');
        var TuittionFees = $('.Screen_Data').find('.TuittionFees');
        var Course = $('.Screen_Data').find('.Course');


        if (!document.getElementById("fname").checkValidity()) {}
        else if (!document.getElementById("lname").checkValidity()) {}
        else if (!document.getElementById("dob").checkValidity()) {}
        else if (!document.getElementById("tfees").checkValidity()) {}
        else if (!document.getElementById("course").checkValidity()) {}
        else if (frm.IsEmpty(FirstName.val())) {
            //Show alert
            bs.ShowError("Please enter First Name", FirstName)
        }
        else if (frm.IsEmpty(LastName.val())) {
            //Show alert
            bs.ShowError("Please enter Last Name", LastName)
        }
        else if (frm.IsEmpty(DateOfBirth.val())) {
            //Show alert
            bs.ShowError("Please enter Date of Birth", DateOfBirth)
        }
        else if (frm.IsEmpty(TuittionFees.val())) {
            //Show alert
            bs.ShowError("Please enter Tuittion Fees", TuittionFees)
        }
        else if (frm.IsEmpty(Course.val())) {
            //Show alert
            bs.ShowError("Please select Course", Course)
        }
        else {
            var AddEntry =
            {
                'rec_id': js.MD5(),
                'FirstName': FirstName.val(),
                'LastName': LastName.val(),
                'DateOfBirth': DateOfBirth.val(),
                'TuittionFees': TuittionFees.val(),
                'Course': Course.val(),
            };

            //ls.AddArr(LocalstorageName,AddEntry);
            studentsPC_Data.push(AddEntry);

            var d = bs.AlertMsg("Successfully add new student", "success");
            $('.Screen_Data').html(d);

            //Show All Entries

            $(".BTN_View_SPC").click();
        }


    });
    //--->Add - End



    //--->View - Start
    $(document).on('click', '.BTN_View_SPC', function (event) {
        //Get data  
        var AllData = studentsPC_Data;


        if (js.Size(AllData) < 1 || js.Size(AllData) == 0) {
            var d = bs.AlertMsg("Oppps...Looks like there are no students. <br><br> You should add a new student first", "warning");
            $('.Screen_Data').html(d).show();
            return false;
        }


        var strTableData = '';
        strTableData += '<table class="table table-hover" id="myTable">';
        strTableData += '<thead>';
        //strTableData += '<tr>';
        strTableData += '<th>ID</th>';
        strTableData += '<th>First Name</th>';
        strTableData += '<th>Last Name</th>';
        strTableData += '<th>Date of Birth</th>';
        strTableData += '<th>Tuittion Fees</th>';
        strTableData += '<th>Course</th>';
        strTableData += '<th>Actions</th>';
        //strTableData += '</tr>'; 		
        strTableData += '</thead>';


        strTableData += '<tbody>'
        for (var i = 0; i < AllData.length; i++) {
            var val = AllData[i];

            var id = i + 1;

            strTableData += '<tr>';
            strTableData += '<td>' + id + '</td>';
            strTableData += '<td>' + val.FirstName + '</td>';
            strTableData += '<td>' + val.LastName + '</td>';
            strTableData += '<td>' + moment(val.DateOfBirth).format('DD-MM-YYYY') + '</td>';
            strTableData += '<td>' + val.TuittionFees + '</td>';
            strTableData += '<td>' + val.Course + '</td>';

            //Edit/Delete Options
            var Edit = '<button type="button" class="btn btn-secondary BTN_Edit_SPC" rec_id="' + val.rec_id + '" DateOfBirth="' + val.DateOfBirth + '" >Edit</button>  ';
            var Delete = '<button type="button" class="btn btn-secondary BTN_Delete_SPC" rec_id="' + val.rec_id + '"  DateOfBirth="' + val.DateOfBirth + '"  first_name="' + val.FirtsName + '"  last_name="' + val.LastName + '" course="' + val.Course + '">Delete</button>';

            strTableData += '<td>' + Edit + Delete + '</td>';
            strTableData += '</tr>';

        };
        strTableData += '<tbody>'
        strTableData += '</table>';

        $('.Screen_Data').html(strTableData).show();

    });
    //--->View - End


    //--->Edit - Start	
    $(document).on('click', '.BTN_Edit_SPC', function (event) {
        var rec_id = $(this).attr('rec_id');
        var DateOfBirth = $(this).attr('DateOfBirth');

        //Get data from template
        var GetTemplateData = $('.Template_New').html();

        $('.Screen_Data').html(GetTemplateData);
        $('.Screen_Data').find('.btn_Data').html('Update').addClass('BTN_Update_SPC_Data');
        $('.Screen_Data').find('.btn_Data').attr('rec_id', rec_id);

        //map object values
        var data = $.map(studentsPC_Data, function (val, i) {
            if (val.rec_id == rec_id) {
                return val;
            }
        });

        var FirstName = $('.Screen_Data').find('.FirstName').val(data[0].FirstName);
        var LastName = $('.Screen_Data').find('.LastName').val(data[0].LastName);
        var DateOfBirth = $('.Screen_Data').find('.DateOfBirth').val(data[0].DateOfBirth);
        var TuittionFees = $('.Screen_Data').find('.TuittionFees').val(data[0].TuittionFees);

        $('.Screen_Data').show();
    });

    //Update Data
    $('.Screen_Data').on('click', '.BTN_Update_SPC_Data', function (event) {
        //To clear all old alerts
        bs.ClearError();

        //Get values
        var FirstName = $('.Screen_Data').find('.FirstName');
        var LastName = $('.Screen_Data').find('.LastName');
        var DateOfBirth = $('.Screen_Data').find('.DateOfBirth');
        var TuittionFees = $('.Screen_Data').find('.TuittionFees');
        var Course = $('.Screen_Data').find('.Course');

        if (!document.getElementById("fname").checkValidity()) {}
        else if (!document.getElementById("lname").checkValidity()) {}
        else if (!document.getElementById("dob").checkValidity()) {}
        else if (!document.getElementById("tfees").checkValidity()) {}
        else if (!document.getElementById("course").checkValidity()) {}
        else if (frm.IsEmpty(FirstName.val())) {
            //Show alert
            bs.ShowError("Please enter First Name", FirstName)
        }
        else if (frm.IsEmpty(LastName.val())) {
            //Show alert
            bs.ShowError("Please enter Last Name", LastName)
        }
        else if (frm.IsEmpty(DateOfBirth.val())) {
            //Show alert
            bs.ShowError("Please enter Date of Birth", DateOfBirth)
        }
        else if (frm.IsEmpty(TuittionFees.val())) {
            //Show alert
            bs.ShowError("Please select Tuittion Fees", TuittionFees)
        }
        else if (frm.IsEmpty(Course.val())) {
            //Show alert
            bs.ShowError("Please select Course", Course)
        }
        else {
            var rec_id = $(this).attr('rec_id');

            //Update value

            var data = $.map(studentsPC_Data, function (val, i) {
                if (val.rec_id == rec_id) {
                    val.FirstName = FirstName.val();
                    val.LastName = LastName.val();
                    val.DateOfBirth = DateOfBirth.val();
                    val.TuittionFees = TuittionFees.val();
                    val.Course = Course.val();
                }
            });

            var d = bs.AlertMsg("Successfully updated new student", "success");
            $('.Screen_Data').html(data);

            //Show All			 
            $(".BTN_View_SPC").click();
        }
    });
    //--->Edit - End

    //--->Delete - Start
    $(document).on('click', '.BTN_Delete_SPC', function (event) {
        var rec_id = $(this).attr('rec_id');
        var first_name = $(this).attr('first_name');

        var ObjArrOptions =
        {
            title: "Confirmation required",
            text: "Are you sure you want to delete student?",
            //text: "Are you sure you want to delete student (<b>" + first_name + "<b>) ?",
            confirm: function (button) {

                //delete only one element from array
                var newarr = $.map(studentsPC_Data, function (val, i) {
                    if (val.rec_id !== rec_id) {
                        return val;
                    }
                });

                //update array elements
                studentsPC_Data = newarr;

                //Show All Data			 
                $(".BTN_View_SPC").click();

            },
            cancel: function (button) {
                //close modal
            },
            confirmButton: "Confirm",
            cancelButton: "Cancel",
            // Bootstrap modal and button class
            confirmButtonClass: "btn-danger",
            cancelButtonClass: "btn-default",
            dialogClass: "modal-dialog modal-lg"
        }

        bs.confirm(ObjArrOptions);

    });

    $(document).on('click', '.BTN_Delete_All_SPC', function (event) {
        var AllData = _.sortBy(studentsPC_Data, ['DateOfBirth']);

        if (js.Size(AllData) < 1 || js.Size(AllData) == 0) {
            var d = bs.AlertMsg("Oppps...Looks like there are no students. <br><br> You should add a student first", "warning");
            $('.Screen_Data').html(d).show();
            return false;
        }


        var ObjArrOptions =
        {
            title: "Confirmation required",
            text: "Are you sure you want to delete All Students ?",
            confirm: function (button) {
                //delete all data from array
                studentsPC_Data = [];
                //Show All data	 
                $(".BTN_View_SPC").click();

            },
            cancel: function (button) {
                // nothing to do
            },
            confirmButton: "Confirm",
            cancelButton: "Cancel",
            // Bootstrap modal and button class
            confirmButtonClass: "btn-danger",
            cancelButtonClass: "btn-default",
            dialogClass: "modal-dialog modal-lg"
        }

        bs.confirm(ObjArrOptions);

    });
    //--->Delete - End

    //Show data on page load
    if (js.Size(studentsPC_Data) > 0) {
        $(".BTN_View_SPC").click();
    }


 //----------------------------------------------------------------------------------------------------------------------------------------------------
 //  ASSIGNMENTS PER COURSE
 //----------------------------------------------------------------------------------------------------------------------------------------------------

    //load new entry screen 
    $(document).on('click', '.BTN_Add_New_APC', function (event) {
        //Get data from template
        var GetTemplateData = $('.Template_New').html();

        $('.Screen_Data').html(GetTemplateData);
        $('.Screen_Data').find('.btn_Data').html('Save').addClass('BTN_Save_New_Data_APC')
        $('.Screen_Data').show();
    });

    //new entry screen add button action
    $('.Screen_Data').on('click', '.BTN_Save_New_Data_APC', function (event) {
        //To clear all old alerts
        bs.ClearError();

        //Get values
        var Title = $('.Screen_Data').find('.Title');
        var Description = $('.Screen_Data').find('.Description');
        var SubDateTime = $('.Screen_Data').find('.SubDateTime');
        var OralMark = $('.Screen_Data').find('.OralMark');
        var TotalMark = $('.Screen_Data').find('.TotalMark');
        var Course = $('.Screen_Data').find('.Course');


        if (!document.getElementById("title").checkValidity()) {}
        else if (!document.getElementById("description").checkValidity()) {}
        else if (!document.getElementById("SubDateTime").checkValidity()) {}
        else if (!document.getElementById("oralMark").checkValidity()) {}
        else if (!document.getElementById("totalMark").checkValidity()) {}
        else if (!document.getElementById("course").checkValidity()) {
        }
        else if (frm.IsEmpty(Title.val())) {
            //Show alert
            bs.ShowError("Please enter Title", Title)
        }
        else if (frm.IsEmpty(Description.val())) {
            //Show alert
            bs.ShowError("Please enter Description", Description)
        }
        else if (frm.IsEmpty(OralMark.val())) {
            //Show alert
            bs.ShowError("Please enter Oral Mark", OralMark)
        }
        else if (frm.IsEmpty(TotalMark.val())) {
            //Show alert
            bs.ShowError("Please enter Total Mark", TotalMark)
        }
        else if (frm.IsEmpty(SubDateTime.val())) {
            //Show alert
            bs.ShowError("Please enter Submission Date", SubDateTime)
        }
        else if (frm.IsEmpty(Course.val())) {
            //Show alert
            bs.ShowError("Please enter Course", Course)
        }
        else {
            var AddEntry =
            {
                'rec_id': js.MD5(),
                'Title': Title.val(),
                'Description': Description.val(),
                'SubDateTime': SubDateTime.val(),
                'OralMark': OralMark.val(),
                'TotalMark': TotalMark.val(),
                'Course': Course.val(),
            };

            //ls.AddArr(LocalstorageName,AddEntry);
            assignmentsPC_Data.push(AddEntry);

            var d = bs.AlertMsg("Successfully add new assignment", "success");
            $('.Screen_Data').html(d);

            //Show All Entries

            $(".BTN_View_APC").click();
        }


    });
    //--->Add - End



    //--->View - Start
    $(document).on('click', '.BTN_View_APC', function (event) {
        //Get data  
        var AllData = assignmentsPC_Data;


        if (js.Size(AllData) < 1 || js.Size(AllData) == 0) {
            var d = bs.AlertMsg("Oppps...Looks like there are no assignments. <br><br> You should add a new assignment first", "warning");
            $('.Screen_Data').html(d).show();
            return false;
        }


        var strTableData = '';
        strTableData += '<table class="table table-hover" id="myTable">';
        strTableData += '<thead>';
        //strTableData += '<tr>';
        strTableData += '<th>ID</th>';
        strTableData += '<th>Title</th>';
        strTableData += '<th>Description</th>';
        strTableData += '<th>Submission Date</th>';
        strTableData += '<th>Oral Mark</th>';
        strTableData += '<th>Total Mark</th>';
        strTableData += '<th>Course</th>';
        strTableData += '<th>Actions</th>';
        //strTableData += '</tr>'; 		
        strTableData += '</thead>';


        strTableData += '<tbody>'
        for (var i = 0; i < AllData.length; i++) {
            var val = AllData[i];

            var id = i + 1;

            strTableData += '<tr>';
            strTableData += '<td>' + id + '</td>';
            strTableData += '<td>' + val.Title + '</td>';
            strTableData += '<td>' + val.Description + '</td>';
            strTableData += '<td>' + moment(val.SubDateTime).format('DD-MM-YYYY') + '</td>';
            strTableData += '<td>' + val.OralMark + '</td>';
            strTableData += '<td>' + val.TotalMark + '</td>';
            strTableData += '<td>' + val.Course + '</td>';

            //Edit/Delete Options
            var Edit = '<button type="button" class="btn btn-secondary BTN_Edit_APC" rec_id="' + val.rec_id + '" SubDateTime="' + val.SubDateTime + '" >Edit</button>  ';
            var Delete = '<button type="button" class="btn btn-secondary BTN_Delete_APC" rec_id="' + val.rec_id + '"  SubDateTime="' + val.SubDateTime + '"  title="' + val.Title + '"  description="' + val.Description + '"  oralMark="' + val.OralMark + '"  totalMark="' + val.TotalMark + '"  course="' + val.Course + '">Delete</button>';

            strTableData += '<td>' + Edit + Delete + '</td>';
            strTableData += '</tr>';

        };
        strTableData += '<tbody>'
        strTableData += '</table>';

        $('.Screen_Data').html(strTableData).show();

    });
    //--->View - End


    //--->Edit - Start	
    $(document).on('click', '.BTN_Edit_APC', function (event) {
        var rec_id = $(this).attr('rec_id');
        var SubDateTime = $(this).attr('SubDateTime');

        //Get data from template
        var GetTemplateData = $('.Template_New').html();

        $('.Screen_Data').html(GetTemplateData);
        $('.Screen_Data').find('.btn_Data').html('Update').addClass('BTN_Update_APC_Data');
        $('.Screen_Data').find('.btn_Data').attr('rec_id', rec_id);

        //map and grep
        var data = $.map(assignmentsPC_Data, function (val, i) {
            if (val.rec_id == rec_id) {
                return val;
            }
        });

        var Title = $('.Screen_Data').find('.Title').val(data[0].Title);
        var Description = $('.Screen_Data').find('.Description').val(data[0].Description);
        var SubDateTime = $('.Screen_Data').find('.SubDateTime').val(data[0].SubDateTime);
        var OralMark = $('.Screen_Data').find('.OralMark').val(data[0].OralMark);
        var TotalMark = $('.Screen_Data').find('.TotalMark').val(data[0].TotalMark);
        var Course = $('.Screen_Data').find('.Course').val(data[0].Course);

        $('.Screen_Data').show();
    });

    //Update Data
    $('.Screen_Data').on('click', '.BTN_Update_APC_Data', function (event) {
        //To clear all old alerts
        bs.ClearError();

        //Get values
        var Title = $('.Screen_Data').find('.Title');
        var Description = $('.Screen_Data').find('.Description');
        var OralMark = $('.Screen_Data').find('.OralMark');
        var TotalMark = $('.Screen_Data').find('.TotalMark');
        var SubDateTime = $('.Screen_Data').find('.SubDateTime');
        var Course = $('.Screen_Data').find('.Course');

        if (!document.getElementById("title").checkValidity()) {}
        else if (!document.getElementById("description").checkValidity()) {}
        else if (!document.getElementById("oralMark").checkValidity()) {}
        else if (!document.getElementById("totalMark").checkValidity()) {}
        else if (!document.getElementById("SubDateTime").checkValidity()) {}
        else if (!document.getElementById("course").checkValidity()) {
        }
        else if (frm.IsEmpty(Title.val())) {
            //Show alert
            bs.ShowError("Please enter Title", Title)
        }
        else if (frm.IsEmpty(Description.val())) {
            //Show alert
            bs.ShowError("Please enter Description", Description)
        }
        else if (frm.IsEmpty(OralMark.val())) {
            //Show alert
            bs.ShowError("Please enter Oral Mark", OralMark)
        }
        else if (frm.IsEmpty(TotalMark.val())) {
            //Show alert
            bs.ShowError("Please enter Total Mark", TotalMark)
        }
        else if (frm.IsEmpty(SubDateTime.val())) {
            //Show alert
            bs.ShowError("Please enter Submission Date", SubDateTime)
        }
        else if (frm.IsEmpty(Course.val())) {
            //Show alert
            bs.ShowError("Please enter Course", Course)
        }
        else {
            var rec_id = $(this).attr('rec_id');

            //Update value

            var data = $.map(assignmentsPC_Data, function (val, i) {
                if (val.rec_id == rec_id) {
                    val.Title = Title.val();
                    val.Description = Description.val();
                    val.SubDateTime = SubDateTime.val();
                    val.OralMark = OralMark.val();
                    val.TotalMark = TotalMark.val();
                    val.Course = Course.val();
                }
            });

            var d = bs.AlertMsg("Successfully updated new asignment", "success");
            $('.Screen_Data').html(d);

            //Show All			 
            $(".BTN_View_APC").click();
        }
    });
    //--->Edit - End

    //--->Delete - Start
    $(document).on('click', '.BTN_Delete_APC', function (event) {
        var rec_id = $(this).attr('rec_id');

        var ObjArrOptions =
        {
            title: "Confirmation required",
            text: "Are you sure you want to delete assignment?",
            confirm: function (button) {

                //delete only one element from array
                var newarr = $.map(assignmentsPC_Data, function (val, i) {
                    if (val.rec_id !== rec_id) {
                        return val;
                    }
                });

                //update array elements
                assignmentsPC_Data = newarr;

                //Show All Data			 
                $(".BTN_View_APC").click();

            },
            cancel: function (button) {
                //close modal
            },
            confirmButton: "Confirm",
            cancelButton: "Cancel",
            // Bootstrap modal and button class
            confirmButtonClass: "btn-danger",
            cancelButtonClass: "btn-default",
            dialogClass: "modal-dialog modal-lg"
        }

        bs.confirm(ObjArrOptions);

    });

    $(document).on('click', '.BTN_Delete_All_APC', function (event) {
        var AllData = _.sortBy(assignmentsPC_Data, ['SubDateTime']);

        if (js.Size(AllData) < 1 || js.Size(AllData) == 0) {
            var d = bs.AlertMsg("Oppps...Looks like there are no assignments. <br><br> You should add a assignment first", "warning");
            $('.Screen_Data').html(d).show();
            return false;
        }


        var ObjArrOptions =
        {
            title: "Confirmation required",
            text: "Are you sure you want to delete All Assignments ?",
            confirm: function (button) {
                //delete all data from array
                assignmentsPC_Data = [];
                //Show All data	 
                $(".BTN_View_APC").click();

            },
            cancel: function (button) {
                // nothing to do
            },
            confirmButton: "Confirm",
            cancelButton: "Cancel",
            // Bootstrap modal and button class
            confirmButtonClass: "btn-danger",
            cancelButtonClass: "btn-default",
            dialogClass: "modal-dialog modal-lg"
        }

        bs.confirm(ObjArrOptions);

    });
    //--->Delete - End

    //Show data on page load
    if (js.Size(assignmentsPC_Data) > 0) {
        $(".BTN_View_APC").click();
    }


 //----------------------------------------------------------------------------------------------------------------------------------------------------
 //  ASSIGNMENTS PER STUDENT PER COURSE
 //----------------------------------------------------------------------------------------------------------------------------------------------------

    //load new entry screen 
    $(document).on('click', '.BTN_Add_New_ASC', function (event) {
        //Get data from template
        var GetTemplateData = $('.Template_New').html();

        $('.Screen_Data').html(GetTemplateData);
        $('.Screen_Data').find('.btn_Data').html('Save').addClass('BTN_Save_New_ASC_Data')
        $('.Screen_Data').show();
    });

    //new entry screen add button action
    $('.Screen_Data').on('click', '.BTN_Save_New_ASC_Data', function (event) {
        //To clear all old alerts
        bs.ClearError();

        //Get values
        var FirstName = $('.Screen_Data').find('.FirstName');
        var LastName = $('.Screen_Data').find('.LastName');
        var Course = $('.Screen_Data').find('.Course');
        var Assignment = $('.Screen_Data').find('.Assignment');

        if (!document.getElementById("fname").checkValidity()) {}
        else if (!document.getElementById("lname").checkValidity()) {}
        else if (!document.getElementById("course").checkValidity()) {}
        else if (!document.getElementById("assignment").checkValidity()) {}
        else if (frm.IsEmpty(FirstName.val())) {
            //Show alert
            bs.ShowError("Please enter First Name", FirstName)
        }
        else if (frm.IsEmpty(LastName.val())) {
            //Show alert
            bs.ShowError("Please enter Last Name", LastName)
        }
        else if (frm.IsEmpty(Course.val())) {
            //Show alert
            bs.ShowError("Please select Course", Course)
        }
        else if (frm.IsEmpty(Assignment.val())) {
            //Show alert
            bs.ShowError("Please select Assignment", Assignment)
        }
        else {
            var Assignment = [];
            $.each($("input[name='Assignment']:checked"), function () {
                Assignment.push($(this).val());
            });
            var AddEntry =
            {
                'rec_id': js.MD5(),
                'FirstName': FirstName.val(),
                'LastName': LastName.val(),
                'Course': Course.val(),
                'Assignment': Assignment.join(", "),
            };

            //ls.AddArr(LocalstorageName,AddEntry);
            assignmentsPSPC_Data.push(AddEntry);

            var d = bs.AlertMsg("Successfully add new student", "success");
            $('.Screen_Data').html(d);

            //Show All Entries

            $(".BTN_View_ASC").click();

        }


    });
    //--->Add - End



    //--->View - Start
    $(document).on('click', '.BTN_View_ASC', function (event) {
        //Get data  
        var AllData = assignmentsPSPC_Data;


        if (js.Size(AllData) < 1 || js.Size(AllData) == 0) {
            var d = bs.AlertMsg("Oppps...Looks like there are no students. <br><br> You should add a new student first", "warning");
            $('.Screen_Data').html(d).show();
            return false;
        }


        var strTableData = '';
        strTableData += '<table class="table table-hover" id="myTable">';
        strTableData += '<thead>';
        strTableData += '<th>ID</th>';
        strTableData += '<th>First Name</th>';
        strTableData += '<th>Last Name</th>';
        strTableData += '<th>Courses</th>';
        strTableData += '<th>Assignments</th>';
        strTableData += '<th>Actions</th>';
        strTableData += '</thead>';


        strTableData += '<tbody>'
        for (var i = 0; i < AllData.length; i++) {
            var val = AllData[i];

            var id = i + 1;

            strTableData += '<tr>';
            strTableData += '<td>' + id + '</td>';
            strTableData += '<td>' + val.FirstName + '</td>';
            strTableData += '<td>' + val.LastName + '</td>';
            strTableData += '<td>' + val.Course + '</td>';
            strTableData += '<td>' + val.Assignment + '</td>';

            //Edit/Delete Options
            var Edit = '<button type="button" class="btn btn-secondary BTN_Edit_ASC" rec_id="' + val.rec_id + '">Edit</button>  ';
            var Delete = '<button type="button" class="btn btn-secondary BTN_Delete_ASC" rec_id="' + val.rec_id + '"  first_name="' + val.FirtsName + '"  last_name="' + val.LastName + '" course="' + val.Course + '" assignments="' + val.Assignment + '">Delete</button>';

            strTableData += '<td>' + Edit + Delete + '</td>';
            strTableData += '</tr>';

        };
        strTableData += '<tbody>'
        strTableData += '</table>';

        $('.Screen_Data').html(strTableData).show();

    });
    //--->View - End


    //--->Edit - Start	
    $(document).on('click', '.BTN_Edit_ASC', function (event) {
        var rec_id = $(this).attr('rec_id');
        //var DateOfBirth = $(this).attr('DateOfBirth');

        //Get data from template
        var GetTemplateData = $('.Template_New').html();

        $('.Screen_Data').html(GetTemplateData);
        $('.Screen_Data').find('.btn_Data').html('Update').addClass('BTN_Update_ASC_Data');
        $('.Screen_Data').find('.btn_Data').attr('rec_id', rec_id);

        //map and grep
        var data = $.map(assignmentsPSPC_Data, function (val, i) {
            if (val.rec_id == rec_id) {
                return val;
            }
        });

        var FirstName = $('.Screen_Data').find('.FirstName').val(data[0].FirstName);
        var LastName = $('.Screen_Data').find('.LastName').val(data[0].LastName);

        $('.Screen_Data').show();
    });

    //Update Data
    $('.Screen_Data').on('click', '.BTN_Update_ASC_Data', function (event) {
        //To clear all old alerts
        bs.ClearError();

        //Get values
        var FirstName = $('.Screen_Data').find('.FirstName');
        var LastName = $('.Screen_Data').find('.LastName');
        var Course = $('.Screen_Data').find('.Course');
        var Assignment = $('.Screen_Data').find('.Assignment');

        if (!document.getElementById("fname").checkValidity()) {}
        else if (!document.getElementById("lname").checkValidity()) {}
        else if (!document.getElementById("course").checkValidity()) {}
        else if (!document.getElementById("assignment").checkValidity()) {}
        else if (frm.IsEmpty(FirstName.val())) {
            //Show alert
            bs.ShowError("Please enter First Name", FirstName)
        }
        else if (frm.IsEmpty(LastName.val())) {
            //Show alert
            bs.ShowError("Please enter Last Name", LastName)
        }
        else if (frm.IsEmpty(Course.val())) {
            //Show alert
            bs.ShowError("Please select Course", Course)
        }
        else if (frm.IsEmpty(Assignment.val())) {
            //Show alert
            bs.ShowError("Please select Assignment", Assignment)
        }
        else {
            var rec_id = $(this).attr('rec_id');
            var Assignment = [];
            $.each($("input[name='Assignment']:checked"), function () {
                Assignment.push($(this).val());
            });

            var data = $.map(assignmentsPSPC_Data, function (val, i) {
                if (val.rec_id == rec_id) {
                    val.FirstName = FirstName.val();
                    val.LastName = LastName.val();
                    val.Course = Course.val();
                    val.Assignment = Assignment.join(", ");
                }
            });

            var d = bs.AlertMsg("Successfully updated student", "success");
            $('.Screen_Data').html(data);

            //Show All			 
            $(".BTN_View_ASC").click();
        }
    });
    //--->Edit - End

    //--->Delete - Start
    $(document).on('click', '.BTN_Delete_ASC', function (event) {
        var rec_id = $(this).attr('rec_id');
        var first_name = $(this).attr('first_name');

        var ObjArrOptions =
        {
            title: "Confirmation required",
            text: "Are you sure you want to delete student?",
            //text: "Are you sure you want to delete student (<b>" + first_name + "<b>) ?",
            confirm: function (button) {

                //delete only one element from array
                var newarr = $.map(assignmentsPSPC_Data, function (val, i) {
                    if (val.rec_id !== rec_id) {
                        return val;
                    }
                });

                //update array elements
                assignmentsPSPC_Data = newarr;

                //Show All Data			 
                $(".BTN_View_ASC").click();

            },
            cancel: function (button) {
                //close modal
            },
            confirmButton: "Confirm",
            cancelButton: "Cancel",
            // Bootstrap modal and button class
            confirmButtonClass: "btn-danger",
            cancelButtonClass: "btn-default",
            dialogClass: "modal-dialog modal-lg"
        }

        bs.confirm(ObjArrOptions);

    });

    $(document).on('click', '.BTN_Delete_All_ASC', function (event) {
        var AllData = _.sortBy(assignmentsPSPC_Data, ['DateOfBirth']);

        if (js.Size(AllData) < 1 || js.Size(AllData) == 0) {
            var d = bs.AlertMsg("Oppps...Looks like there are no students. <br><br> You should add a student first", "warning");
            $('.Screen_Data').html(d).show();
            return false;
        }


        var ObjArrOptions =
        {
            title: "Confirmation required",
            text: "Are you sure you want to delete All Students ?",
            confirm: function (button) {
                //delete all data from array
                assignmentsPSPC_Data = [];
                //Show All data	 
                $(".BTN_View_ASC").click();

            },
            cancel: function (button) {
                // nothing to do
            },
            confirmButton: "Confirm",
            cancelButton: "Cancel",
            // Bootstrap modal and button class
            confirmButtonClass: "btn-danger",
            cancelButtonClass: "btn-default",
            dialogClass: "modal-dialog modal-lg"
        }

        bs.confirm(ObjArrOptions);

    });
    //--->Delete - End

    //Show data on page load
    if (js.Size(assignmentsPSPC_Data) > 0) {
        $(".BTN_View_ASC").click();
    }


});