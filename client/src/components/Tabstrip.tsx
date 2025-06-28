import React from 'react';

export default function Tabstrip() {
  return (
    <table border={0} cellSpacing={1} style={{ background: '#808080', margin: 0 }}>
      <tbody>
        <tr>
          <td style={{ background: '#fff', whiteSpace: 'nowrap' }}>
            <b><small><small>&nbsp;<a href="/docs/Syllabus_mat/sheet001.mdx" style={{ color: '#000', textDecoration: 'none', fontSize: '9pt', fontFamily: 'Arial' }}>Syllabus</a>&nbsp;</small></small></b>
          </td>
          <td style={{ background: '#fff', whiteSpace: 'nowrap' }}>
            <b><small><small>&nbsp;<a href="/docs/Syllabus_mat/sheet002.mdx" style={{ color: '#000', textDecoration: 'none', fontSize: '9pt', fontFamily: 'Arial' }}>Materials</a>&nbsp;</small></small></b>
          </td>
          <td style={{ background: '#fff', whiteSpace: 'nowrap' }}>
            <b><small><small>&nbsp;<a href="/docs/Syllabus_mat/sheet003.mdx" style={{ color: '#000', textDecoration: 'none', fontSize: '9pt', fontFamily: 'Arial' }}>LO</a>&nbsp;</small></small></b>
          </td>
          <td style={{ background: '#fff', whiteSpace: 'nowrap' }}>
            <b><small><small>&nbsp;<a href="/docs/Syllabus_mat/sheet004.mdx" style={{ color: '#000', textDecoration: 'none', fontSize: '9pt', fontFamily: 'Arial' }}>Schedule</a>&nbsp;</small></small></b>
          </td>
          <td style={{ background: '#fff', whiteSpace: 'nowrap' }}>
            <b><small><small>&nbsp;<a href="/docs/Syllabus_mat/sheet005.mdx" style={{ color: '#000', textDecoration: 'none', fontSize: '9pt', fontFamily: 'Arial' }}>Grading structure</a>&nbsp;</small></small></b>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
