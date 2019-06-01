# Write Activity

This repository will contain implementation of some important features of Write Activity for Sugarizer

## PDF Generation

**Type-1**
This approach converts the content of a 'div' element into a image using html2canvas library and is converted into PDF using jsPDF library . Major drawback is that the text is not selectable and searchable as it is a part of a image .

Demo - https://ashish0910.github.io/Write-Editor/PDF%20gen%20type-1/

**Type-2**
This approach usses CSS to convert content of a 'div' element into PDF format . Only drawback here is that pop up window appears to choose to save as PDF .

Demo - https://ashish0910.github.io/Write-Editor/PDF%20gen%20type-2/

## DOC Generation

Demo - https://ashish0910.github.io/Write-Editor/DOC%20gen/

## Import From docx
This approach usses mammoth.js library for the conversion .
You can use test docx file from [here](https://ashish0910.github.io/Write-Editor/%20import%20docx/test.docx)

Demo - https://ashish0910.github.io/Write-Editor/%20import%20docx/

Limitations : Borders of the table are ignored , Colour of text is ignored .