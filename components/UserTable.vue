<template>
  <div class="user-list">
    <h2 class="user-list__title">회원 정보</h2>
    <div class="user-list__table-box">
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>email</th>
            <th>이름</th>
            <th>list 수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>thgml5143@hanmail.net</td>
            <td>박소희</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
.user-list {
  &__title {
    font-size: 30px;
    margin-bottom: 50px;
  }
  &__table-box {
    border-top: 3px solid #222;
    border-bottom: 3px solid #222;
    table {
      width: 100%;
      text-align: center;
      thead {
        border-bottom: 2px solid #222;
        th {
          user-select: none;
          padding: 10px 0;
          border-right: 1px solid #222;
          font-size: 24px;
          &:last-child {
            border-right: none;
          }
        }
      }
      tbody {
        tr {
          td {
            cursor: pointer;
            padding: 10px 0;
            font-size: 18px;
            border-right: 1px solid #222;
            &:last-child {
              border-right: none;
            }
          }
        }
      }
    }
  }
}
</style>
