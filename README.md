# Write Activity

This repository will contain implementation of some important features of Write Activity for Sugarizer

## PDF Generation

**Type-1**
This approach converts the content of a 'div' element into a image using html2canvas library and is converted into PDF using jsPDF library . Major drawback is that the text is not selectable and searchable as it is a part of a image .

Demo - https://ashish0910.github.io/Write-Editor/PDF%20gen%20type-1/

**Type-2**
This approach usses CSS to convert content of a 'div' element into PDF format . Only drawback here is that pop up window appears to choose to save as PDF .

Demo - https://ashish0910.github.io/Write-Editor/PDF%20gen%20type-2/